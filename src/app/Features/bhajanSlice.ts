import { createSlice } from "@reduxjs/toolkit"
import { Posts } from "../models/Posts"

interface bhajanState {
Post : Posts | null,
}

export const initialState : bhajanState = {
Post : null,
}

export const bhajanSlice = createSlice({
    name: 'bhajan',
    initialState,
    reducers: {
    }
})