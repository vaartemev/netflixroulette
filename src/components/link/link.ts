import { CLIENT_SIDE_RENDERING } from '../../constants';

export const Link = CLIENT_SIDE_RENDERING
  ? require('./csr-link').CSRLink
  : require('./ssr-link').SSRLink;
