import { AuthService } from "services/auth/AuthService";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toastr } from "react-redux-toastr";
import { UserService } from "services/UserService";
import { IAuthResponse, IEmailPassword } from "./user.interface";
import { errorCatch } from "api/api.helpers";


export const register = createAsyncThunk<IAuthResponse,IEmailPassword>('auth/sign-up',
        async ({email,password},thunkApi) => {
            try {
                const response = await AuthService.register(email, password)
                response.data.message ? toastr.error('Registration', `${response.data.message.message}`) : toastr.success('Registration', 'Completed successfully')
                return response.data
            } catch (error) {
               toastr.error('Registration',`${error}`)
               return thunkApi.rejectWithValue(error)
            }
        }
    );

export const login = createAsyncThunk<IAuthResponse, IEmailPassword>(
    'auth/sign-in',
        async ({email,password },thunkApi) => {
            try {
                const response = await AuthService.auth(email, password)
                response.data.message ? toastr.error('Login', `${response.data.message.message}`) :   toastr.success('Login', 'Completed successfully')
                console.log(response.data)
                return response.data
            } catch (error) {
                toastr.error('Login', `${error}`)
                return thunkApi.rejectWithValue(error)
            }
        }
    )

export const logout = createAsyncThunk('sign-in/logout',async (_,thunkApi)=>
    await AuthService.logout() 
)

export const checkAuth = createAsyncThunk<IAuthResponse, IEmailPassword>(
    'auth/check-auth',
        async (_,thunkApi) => {
            try {
                const response = await AuthService.getNewTokens()
                console.log(response.data)
                return response.data
            } catch (error) {
                if(errorCatch(error) === 'jwt expired'){
                    toastr.error(
                'Logout', 'Your authorized is finished, pls sign in again')
                thunkApi.dispatch(logout())}
                return thunkApi.rejectWithValue(error)
            }
        }
    )

    