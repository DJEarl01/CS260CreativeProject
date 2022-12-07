import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import React from 'react';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CartPage from './pages/CartPage';
import PropsPage from './pages/PropsPage';
import ProductPage from './pages/YeQuotesPage';

function PageSwitcher() {
    return (
        <Router>
        <Routes>
            <Route exact path='/' element={<HomePage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/cart' element={<CartPage />} />
            <Route path='/props' element={<PropsPage />} />
            <Route path='/product' element={<ProductPage />} />

        </Routes>
        </Router>
    );
    }
      
export default PageSwitcher;