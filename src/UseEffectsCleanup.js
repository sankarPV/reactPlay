import React, { useState, useEffect } from 'react';

const UseEffectsCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);

  const changeSize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener('resize', changeSize);
    return () => {
      window.removeEventListener('resize', changeSize);
    };
  });
  return (
    <div>
      <h1>UseEffectsCleanup</h1>
      <h2> window size : {size} </h2>
    </div>
  );
};

export default UseEffectsCleanup;
