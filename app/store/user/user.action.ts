import { useMutation } from "react-query";
import { AuthService } from "services/AuthService";
import { IAuth } from "components/screens/auth/auth.interface"; // Import IAuth
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toastr } from "react-redux-toastr";


export const register = createAsyncThunk('auth/register',
        async ({email,password}) => {
            try {
                const response = await AuthService.register(email, password)
                toastr.success('Registration', 'Completed successfully')
                return response.data
            } catch (error) {
               console.log(error)
            }
        }
    );

    export const login = createAsyncThunk(
        'auth/login',
        async ({email,password }) => {
            try {
                const response = await AuthService.auth(email, password)
                toastr.success('Login', 'Completed successfully')
                return response.data
            } catch (error) {
               console.log(error)
            }
        }
    )
