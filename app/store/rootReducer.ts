import {reducer as toastrReducer} from 'react-redux-toastr'
import { reducer as userReducer } from './user/user.slice'
import { reducer as adminReducer } from './admin/admin.slice'

export const reducers = {
    user:userReducer,
    admin:adminReducer,
    toastr: toastrReducer,
} 