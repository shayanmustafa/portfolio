import React from 'react';
import './styles/home.css';
import Navbar from './nav.js';

const Home = () => (
    <div className="home-wrapper">
        <div className="header">
            <h1>Shayan Mustafa</h1>
            <h2>Web Developer.</h2>
            <Navbar className="menu-home" color="#837D3C"/>
        </div>
    </div>
)

export default Home;