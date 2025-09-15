import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';

export default function AppRouter() {
    return (
        <Router>
            <nav style={{ padding: '10px', background: '#f4f4f4' }}>
                <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
                <Link to="/about" style={{ marginRight: '10px' }}>About</Link>
                <Link to="/contact">Contact</Link>
            </nav>

            <div style={{ padding: '20px' }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </Router>
    );
}
