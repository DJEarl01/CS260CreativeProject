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
            <Route exact path='CS260CreativeProject/react-version/build/' element={<HomePage />} />
            <Route path='CS260CreativeProject/react-version/build/about' element={<AboutPage />} />
            <Route path='CS260CreativeProject/react-version/build/cart' element={<CartPage />} />
            <Route path='CS260CreativeProject/react-version/build/props' element={<PropsPage />} />
            <Route path='CS260CreativeProject/react-version/build/ye-quotes' element={<YeQuotesPage />} />
        </Routes>
        </Router>
    );
    }
      
export default PageSwitcher;