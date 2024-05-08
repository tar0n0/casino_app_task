import React from 'react';
import { Routes } from 'react-router-dom';

import { RoutesWrapper } from "./conntainers/routesWrapper";


const App: React.FC = () => {
  return (
      <Routes>
         <RoutesWrapper />
      </Routes>
  );
};

export default App;
