import { AuthService } from "services/AuthService";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toastr } from "react-redux-toastr";
import { UserService } from "services/UserService";


export const register = createAsyncThunk('auth/sign-up',
        async ({email,password}) => {
            try {
                const response = await AuthService.register(email, password)
                response.data.message ? toastr.error('Registration', `${response.data.message.message}`) : toastr.success('Registration', 'Completed successfully')
                return response.data
            } catch (error) {
               toastr.error('Registration',`${error}`)
            }
        }
    );

    export const login = createAsyncThunk(
        'auth/sign-in',
        async ({email,password }) => {
            try {
                const response = await AuthService.auth(email, password)
                response.data.message ? toastr.error('Login', `${response.data.message.message}`) :   toastr.success('Login', 'Completed successfully')
                console.log(response.data)
                return response.data
            } catch (error) {
                toastr.error('Login', `${error}`)
            }
        }
    )

    