import React from 'react';

import { SearchPage } from '../src/pages';
import { Footer } from '../src/components';

const SearchResult = (props) => {
  return (
    <>
      <SearchPage match={props} />
      <Footer />
    </>
  );
};

SearchResult.getInitialProps = (props) => {
  let params;

  if (typeof props.req !== 'undefined') {
    params = props.req.params;
  }
  return { params };
};

export default SearchResult;
