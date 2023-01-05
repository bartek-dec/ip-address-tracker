import React from 'react';
import {GoChevronRight} from 'react-icons/go';
import {setUserInput} from "../features/map/mapSlice";
import {useDispatch, useSelector} from "react-redux";
import {getUserIp} from "../features/map/mapSlice";

const Form = () => {
    const {userInput,isLoading} = useSelector((state) => state.map);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const input = e.target.value;
        dispatch(setUserInput(input));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(getUserIp(userInput));
    }
    return (
        <section className='section'>
            <h1 className='section-title'>IP Address Tracker</h1>
            <form className='form center'>
                <input type='text' className='form-input' value={userInput}
                       onChange={handleChange}
                       placeholder='Search for any IP address or domain'/>
                <button disabled={isLoading} type='submit' className='btn' onClick={handleSubmit}>
                    <GoChevronRight/>
                </button>
            </form>
        </section>
    );
};

export default Form;