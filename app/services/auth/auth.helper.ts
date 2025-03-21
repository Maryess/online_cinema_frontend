import { IAuthResponse, ITokens } from "store/user/user.interface";
import Cookies from 'js-cookie'

export const saveTokensStorage =(data:ITokens) => {

    console.log('Access Token:', data.accessToken);
    console.log('Refresh Token:', data);
    Cookies.set('accessToken',data.accessToken)
    Cookies.set('refreshToken', data.refreshToken)
}

export const saveToStorage = (data:IAuthResponse) => {
    saveTokensStorage(data)
    localStorage.setItem('user', JSON.stringify(data.user))
}

export const removeTokensStorage = () => {
    Cookies.remove('accessToken')
    Cookies.remove('refreshToken')
}