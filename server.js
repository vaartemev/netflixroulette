// const cacheableResponse = require('cacheable-response');

const express = require('express');
const next = require('next');

const PORT = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handleNextRequest = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.get('/', (req, res) => {
    res.redirect('/search');
  });

  server.get('/searchResult/:searchValue', (req, res) => {
    console.log('searchResult', req.params.searchValue);
    return app.render(req, res, '/searchResult', {
      searchValue: req.params.searchValue,
    });
  });

  server.get('/search', (req, res) => {
    app.render(req, res, '/search', {
      searchValue: req.params.searchValue,
    });
  });

  server.get('/movie/:id', (req, res) => {
    console.log('movie', req.query.id);
    app.render(req, res, '/movie', { id: req.query.id });
  });

  server.get('*', (req, res) => {
    return handleNextRequest(req, res);
  });

  server.listen(PORT, err => {
    if (err) throw err;
    console.log(`> It's working on http://localhost:${PORT}`);
  });
});
