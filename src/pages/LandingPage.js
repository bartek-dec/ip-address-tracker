import React from 'react';
import {Form, MapComp} from '../components';

const LandingPage = () => {
    return (
        <main className='main'>
            <Form/>
            <MapComp/>

            <article className='article-info'>
                <div className='info-container'>
                    <h3 className='info-header'>ip address</h3>
                    <h2 className='info-text'>192.212.174.101</h2>
                </div>

                <div className='info-container'>
                    <h3 className='info-header'>location</h3>
                    <h2 className='info-text'>Brooklyn, NY 10001</h2>
                </div>

                <div className='info-container'>
                    <h3 className='info-header'>timezone</h3>
                    <h2 className='info-text'>utc-05:00</h2>
                </div>

                <div className='info-container'>
                    <h3 className='info-header'>isp</h3>
                    <h2 className='info-text'>SpaceX Starlink</h2>
                </div>
            </article>
        </main>
    );
};

export default LandingPage;