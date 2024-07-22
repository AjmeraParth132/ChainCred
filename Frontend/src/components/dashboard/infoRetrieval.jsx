import React from 'react';
import { Link } from 'react-router-dom';
import './infoRetrieval.css';

const InfoRetrieval = () => {
    return (
        <div className='info-page-body'>
            <p>Our team will reach out to your mail id for setup and relevant information.</p>
            <p>For sample playground, <Link to="/dashboard">click here</Link>.</p>
        </div>
    );
};

export default InfoRetrieval;