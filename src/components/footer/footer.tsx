import React from 'react';
import styled from 'styled-components';
import { Logo } from '../logo';

const FooterWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.9);
  width: 100%;
  line-height: 70px;
  padding: 0 70px;
  position: absolute;
`;

export const Footer = () => {
  return (
    <FooterWrapper>
      <Logo text="netflixroulette" />
    </FooterWrapper>
  );
};
