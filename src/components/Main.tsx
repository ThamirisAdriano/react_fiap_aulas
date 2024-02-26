import React from 'react';
import './Main.css';

const Main: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <main className="main-content">
      {children}
    </main>
  );
};

export default Main;
