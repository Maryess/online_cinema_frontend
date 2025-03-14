import { createSlice } from "@reduxjs/toolkit";
import { IUserInitialState } from "./user.interface";
import { getStoreLocal } from "utils/localStorage/localStorage";
import { login, register } from "./user.action";

const initialState: IUserInitialState = {
	user: getStoreLocal('user'),
	isLoading: false,
}

const userReducer = createSlice({
    name:'user',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
		builder
			.addCase(register.pending, (state) => {
				state.isLoading = true
			})
			.addCase(register.fulfilled, (state, { payload }) => {
				state.isLoading = false
				state.user = payload.user
			})
			.addCase(register.rejected, (state) => {
				state.isLoading = false
				state.user = null
			})
			.addCase(login.pending, (state) => {
				state.isLoading = true
			})
			.addCase(login.fulfilled, (state, { payload }) => {
				state.isLoading = false
				state.user = payload.user
			})
			.addCase(login.rejected, (state) => {
				state.isLoading = false
				state.user = null
			})
			// .addCase(logout.fulfilled, (state) => {
			// 	state.isLoading = false
			// 	state.user = null
			// })
			// .addCase(checkAuth.fulfilled, (state, { payload }) => {
			// 	state.user = payload.user
			// })
	},
})

export const {reducer} = userReducer