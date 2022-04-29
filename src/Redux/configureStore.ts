import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { bhajanSlice } from "../app/Features/bhajanSlice";

export const BhajanStore = configureStore({
    reducer : {
        bhajan : bhajanSlice.reducer,
    }
});

export type RootState = ReturnType<typeof  BhajanStore.getState>;
export type AppDispatch = typeof BhajanStore.dispatch;
export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch=() => useDispatch<AppDispatch>(); 