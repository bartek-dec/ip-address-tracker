import React from 'react';

const Error = ({error}) => {
    return (
        <section className='section-error'>
            <h1 className='error-heading'>{error}</h1>
        </section>
    );
};

export default Error;