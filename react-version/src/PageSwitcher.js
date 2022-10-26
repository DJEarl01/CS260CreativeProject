import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import React from 'react';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import CartPage from './CartPage';
import PropsPage from './PropsPage';
import YeQuotesPage from './YeQuotesPage';

function PageSwitcher() {
    return (
        <Router>
        <Routes>
            <Route exact path='/' element={<HomePage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/cart' element={<CartPage />} />
            <Route path='/props' element={<PropsPage />} />
            <Route path='/ye-quotes' element={<YeQuotesPage />} />
        </Routes>
        </Router>
    );
    }
      
export default PageSwitcher;