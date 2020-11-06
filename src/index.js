import React from 'react';
import ReactDOM from 'react-dom';

import Banner from './components/Banner';
import Layout from './components/Layout';
import { ThemeContextProvider } from './context/themeContext';
import './styles.css';

ReactDOM.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <Layout>
        <Banner />
      </Layout>
    </ThemeContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
