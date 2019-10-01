import { CLIENT_SIDE_RENDERING } from '../../constants';

console.log(CLIENT_SIDE_RENDERING);
export const Link = CLIENT_SIDE_RENDERING
  ? require('./csr-link').CSRLink
  : require('./ssr-link').SSRLink;
