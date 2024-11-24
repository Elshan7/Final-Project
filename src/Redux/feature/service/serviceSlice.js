import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    value: [],
}

export const getService = createAsyncThunk("getService", async () => {
    const {data} = await axios.get("https://67430d5db7464b1c2a63729d.mockapi.io/services")
    return data
})

export const serviceSlice = createSlice ({
    name: "service",
    initialState,
    reducers: {

    },
    extraReducers: (payload) => {

        payload.addCase(getService.fulfilled, (state,action) => {
            state.value = action.payload
            
        })
    }
})



export default serviceSlice.reducer