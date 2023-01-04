import React from 'react';
import {GoChevronRight} from 'react-icons/go';

const Form = () => {
    return (
        <section className='section'>
            <h1 className='section-title'>IP Address Tracker</h1>
            <form className='form center'>
                <input type='text' className='form-input'
                       placeholder='Search for any IP address or domain'/>
                <button type='submit' className='btn'>
                    <GoChevronRight/>
                </button>
            </form>
        </section>
    );
};

export default Form;