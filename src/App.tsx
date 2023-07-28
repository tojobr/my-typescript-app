import React from 'react';
import { HashRouter as Router, Route, Link, Routes } from 'react-router-dom';

import './App.css';
import Home from './pages/Home';
import Products from './pages/Products';
import NotFound from './pages/NotFound';

/*
<Router basename='/app'>

</Router>
*/
export default class App extends React.Component {
  render() {
    return (
      
        <>
          <nav className='nav-items'>
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
						<Link to="/not">Not found</Link>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />

						<Route path="*" element={<NotFound />} />
          </Routes>
        </>
      
    );
  }
}
