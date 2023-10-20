import React from 'react';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFounded from './pages/NotFounded';
import Cart from './pages/Cart';

import './scss/app.scss';

export const SearchContext = React.createContext();

const App = () => {
  const [searchValue, setSearchValue] = React.useState('');

  return (
    <div className="wrapper">
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFounded />} />
          </Routes>
        </div>
      </SearchContext.Provider>
    </div>
  );
};

export default App;
