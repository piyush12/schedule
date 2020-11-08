import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';

import Layout from './components/Layout';
import { ThemeContextProvider } from './context/themeContext';
import './styles.css';

const HomePage = lazy(() => import('./pages/HomePage.js'));

ReactDOM.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <Suspense fallback={'...loading'}>
        <Layout>
          <HomePage />
        </Layout>
      </Suspense>
    </ThemeContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
