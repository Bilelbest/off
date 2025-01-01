import React from 'react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
    return (
        <div className="landing-page">
            <h1>Welcome to DZ-Tabib</h1>
            <p>Book appointments with the best doctors easily!</p>
            <Link to="/profile">
                <button>Go to Profile</button>
            </Link>
        </div>
    );
}
