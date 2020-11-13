import React, { createContext } from 'react';

const ScrollContext = createContext();

const ScrollContextProvider = (props) => {
  const handleClick = (section) => {
    //section.preventDefault();
    const getId = document.getElementById(section);
    console.log('section', getId);
    window.scroll({
      top: getId.offsetTop - 70,
      behavior: 'smooth',
    });
  };

  return (
    <ScrollContext.Provider
      value={{
        onClick: handleClick,
      }}
      {...props}
    />
  );
};

export { ScrollContextProvider, ScrollContext };
