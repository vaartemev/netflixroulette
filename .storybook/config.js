import { configure } from '@storybook/react';
import '../src/main.scss';

function loadStories() {
  require('../src/components/header/header.story.js');
  require('../src/components/additional/additional.story.js');
  require('../src/components/footer/footer.story.js');
  require('../src/components/logo/logo.story.js');
  require('../src/components/movieItem/movieItem.story.js');
  require('../src/components/movieTitle/movieTitle.story.js');
  require('../src/components/resultBody/resultBody.story.js');
  require('../src/components/searchButton/searchButton.story.js');
  require('../src/components/searchField/searchField.story.js');
  require('../src/components/searchFilters/searchFilters.story.js');
  require('../src/components/searchInput/searchInput.story.js');
}

configure(loadStories, module);
