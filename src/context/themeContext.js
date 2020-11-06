import React, { createContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

const THEME_PREFIX = 'SCHEDULER-THEME';

const ThemeContextProvider = (props) => {
  const [theme, setTheme] = useState(
    () => JSON.parse(localStorage.getItem(THEME_PREFIX)) || 'light-mode'
  );

  const setThemeMode = () => {
    let mode = theme === 'light-mode' ? 'dark-mode' : 'light-mode';
    setTheme(mode);
  };

  useEffect(() => {
    localStorage.setItem(THEME_PREFIX, JSON.stringify(theme));
    document.body.classList.remove('light-mode');
    document.body.classList.remove('dark-mode');
    document.body.classList.add(theme);
  }, [theme]);
  return (
    <ThemeContext.Provider
      value={{
        theme,
        setThemeMode,
      }}
      {...props}
    />
  );
};

export { ThemeContext, ThemeContextProvider };
