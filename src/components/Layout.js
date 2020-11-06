import React from 'react';

import { Navigation, NavigationRight } from './Nav';
import Footer from './Footer';
import Header from './Header';
import GlobalStyles from '../styles/GlobalStyles';

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Header>
        <Navigation />
        <NavigationRight />
      </Header>
      {children}
      <Footer />
    </>
  );
};

export default Layout;
