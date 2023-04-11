import React from 'react';
import Header from './components/Header/Header';
import { Outlet } from 'react-router-dom';
import Category from './components/Category/Category';
import Bennar from './components/Bennar/Bennar';


const App = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default App;