import { useContext } from 'react';

import { ScrollContext } from '../context/scrollContext';

const useScrollSection = () => {
  const context = useContext(ScrollContext);

  if (context === 'undefined') {
    throw new Error('Must wrap in scrollcontext provider');
  }
  return context;
};

export default useScrollSection;
