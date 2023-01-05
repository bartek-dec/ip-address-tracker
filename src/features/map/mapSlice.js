import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const url = 'https://geo.ipify.org/api/v2/country,city?apiKey';

const initialState = {
    userInput: '',
    isLoading: true,
    errorMsg: '',
    ipAddress: '',
    city: '',
    postalCode: '',
    timezone: '',
    lat: '',
    lng: '',
    isp: ''
}

export const getUserIp = createAsyncThunk('map/getUserIp', async (input = '', thunkAPI) => {
    try {
        const {data} = await axios.get(`${url}=${process.env.REACT_APP_API_KEY}&ipAddress=${input}`);
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.messages);
    }
});

const mapSlice = createSlice({
    name: 'map',
    initialState,
    reducers: {
        setUserInput: (state, action) => {
            state.userInput = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getUserIp.pending, (state) => {
            state.isLoading = true;
            state.errorMsg = '';
        }).addCase(getUserIp.fulfilled, (state, action) => {
            state.isLoading = false;
            state.errorMsg = '';
            state.ipAddress = action.payload.ip;
            state.city = action.payload.location.city;
            state.postalCode = action.payload.location.postalCode;
            state.timezone = action.payload.location.timezone;
            state.lat = action.payload.location.lat;
            state.lng = action.payload.location.lng;
            state.isp = action.payload.isp;
        }).addCase(getUserIp.rejected, (state, action) => {
            state.isLoading = false;
            state.errorMsg = action.payload;
        })
    }
});

export const {setUserInput} = mapSlice.actions;
export default mapSlice.reducer;