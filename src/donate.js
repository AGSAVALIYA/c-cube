import React from 'react';
import './donate.css';
import Nav from './navbar';
import Footer from './footer';

const Donate = () => {
    return (
        <div className="donate">
            <Nav />
            <h1 className="dtitle">Donate</h1>
            <Footer />
        </div>
    );
}

export default Donate;