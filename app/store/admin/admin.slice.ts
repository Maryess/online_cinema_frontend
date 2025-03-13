import { createSlice } from "@reduxjs/toolkit";
import { getStoreLocal } from "utils/localStorage/localStorage";
import { createMovie } from "./admin.action";
import { IAdminInitialState } from "./admin.interfcae";

const initialState:IAdminInitialState = {
    admin:{
        movie:getStoreLocal('movie')
    },
    isLoading:false
}

const adminReducer = createSlice({
    name:'admin',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
            .addCase(createMovie.pending,(state)=> {
                state.isLoading = true
            })
    }
})

export const {reducer} = adminReducer