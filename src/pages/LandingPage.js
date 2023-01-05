import React, {useEffect} from 'react';
import {Form, MapComp, Card, Spinner, Error} from '../components';
import {getUserIp} from "../features/map/mapSlice";
import {useDispatch, useSelector} from "react-redux";

const LandingPage = () => {
    const {isLoading, errorMsg} = useSelector((state) => state.map);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserIp());
        // eslint-disable-next-line
    }, []);

    if (errorMsg) {
        return (
            <main className='main'>
                <Form/>
                <Error error={errorMsg}/>
            </main>
        );
    }

    return (
        <main className='main'>
            <Form/>
            {isLoading ? <Spinner/> : <MapComp/>}
            <Card/>
        </main>
    );
};

export default LandingPage;