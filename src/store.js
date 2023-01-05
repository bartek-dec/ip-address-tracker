import {configureStore} from "@reduxjs/toolkit";
import mapReducer from './features/map/mapSlice';

const store = configureStore({
    reducer: {
        map: mapReducer
    }
});

export default store