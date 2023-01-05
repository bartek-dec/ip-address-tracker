import React from 'react';
import {useSelector} from "react-redux";

const Card = () => {
    const {ipAddress, city, postalCode, timezone, isp} = useSelector((state) => state.map);

    return (
        <article className='article-info'>
            <div className='info-container'>
                <h3 className='info-header'>ip address</h3>
                <h2 className='info-text'>{ipAddress}</h2>
            </div>

            <div className='info-container'>
                <h3 className='info-header'>location</h3>
                <h2 className='info-text'>{city} {postalCode ? `, ${postalCode}` : ''}</h2>
            </div>

            <div className='info-container'>
                <h3 className='info-header'>timezone</h3>
                <h2 className='info-text'>UTC{timezone}</h2>
            </div>

            <div className='info-container'>
                <h3 className='info-header'>isp</h3>
                <h2 className='info-text'>{isp}</h2>
            </div>
        </article>
    );
};

export default Card;