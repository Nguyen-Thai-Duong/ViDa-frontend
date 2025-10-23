import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import FuturePlans from './pages/FuturePlans';
import QRAdmin from './pages/QRAdmin';
import QRLookup from './pages/QRLookup';
import Footer from './components/Footer';

function App() {
    return (
        <Router>
            <div className="min-h-screen bg-gray-50">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/future-plans" element={<FuturePlans />} />
                    <Route path="/qr-admin" element={<QRAdmin />} />
                    <Route path="/qr-lookup" element={<QRLookup />} />
                    <Route path="/qr-lookup/:productId" element={<QRLookup />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;