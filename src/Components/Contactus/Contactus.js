import './Contactus.css';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Contactus() {
    return (
        <>
            <div className="contactus">
                <button className = "dropdown-button" > Contact fi$pond </button>
                    <div className="dropd">
                        <Link to = '/contact-us/disclaimer'> Disclaimer </Link>
                        <Link to = '/contact-us/developer'> Developer </Link>
                        <Link to = '/contact-us/faq'> Customer Service </Link>
                    </div>
            </div>
        </>    
    );
}