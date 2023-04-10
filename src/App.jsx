import React from 'react';
import Header from './components/Header/Header';
import { Outlet } from 'react-router-dom';
import Category from './components/Category/Category';
import Bennar from './components/Bennar/Bennar';
import Jobs from './components/Jobs/Jobs';

const App = () => {
  return (
    <div>
      <Header></Header>
      <Bennar></Bennar>
      <Category></Category>
      <Jobs></Jobs>
      <Outlet></Outlet>
    </div>
  );
};

export default App;