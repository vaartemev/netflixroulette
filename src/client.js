import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { RestLink } from 'apollo-link-rest';
import { createHttpLink } from 'apollo-link-http';
import fetch from 'node-fetch';

global.fetch = fetch;
global.Headers = fetch.Headers;

const cache = new InMemoryCache();

// setup your `RestLink` with your endpoint
const restLink = new RestLink({
  uri: 'https://reactjs-cdp.herokuapp.com/movies',
});

const httpLink = createHttpLink({
  uri: 'http://react-cdp-api.herokuapp.com/movies',
  fetch,
});

const httpClient = () =>
  new ApolloClient({
    ssrMode: true,
    link: httpLink,
    cache,
  });

// setup your client
const restClient = () =>
  new ApolloClient({
    link: restLink,
    cache,
  });

const getClientWithNecessaryLink = () =>
  typeof window === 'undefined' ? httpClient() : restClient();

export const client = getClientWithNecessaryLink();
