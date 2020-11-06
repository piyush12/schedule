import { useContext } from 'react';

import { ThemeContext } from '../context/themeContext';

const useToggleTheme = () => {
  const context = useContext(ThemeContext);
  if (context === 'undefined') {
    throw new Error(`useToggleTheme must be used within a ThemeProvider`);
  }
  return context;
};

export default useToggleTheme;
