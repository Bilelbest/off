import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import ProfilePage from './components/ProfilePage';

export default function App() {
    return (
        <Router>
            <nav>
                <Link to="/">Landing</Link>
                <Link to="/profile">Profile</Link>
            </nav>
            <Routes>
                <Route path="/" element={<LandingPage />} />
               <Route path="/profile" element={<ProfilePage />} />
            </Routes>
        </Router>
    );
}
