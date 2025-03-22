import Layout from "components/layout/Layout"
import React, { FC } from "react"
import { QueryClient, QueryClientProvider } from "react-query"
import ReduxToastr from "./ReduxToastr"
import { Provider } from "react-redux"
import { store } from "store/store"
import HeadProvider from "./HeadProvider"
import AuthProvider from "./AuthProvider/AuthProvider"
import { TypeComponentAuthFields } from "shared/types/auth.types"


const MainProvider:FC<TypeComponentAuthFields> = ({children, Component}) => {

const queryClient = new QueryClient({
    defaultOptions:{
        queries:{
            refetchOnWindowFocus:false
        }
    }
})
    
  return (
    <HeadProvider>
    <Provider store={store}>
    <QueryClientProvider client={queryClient}>  
        <ReduxToastr/>
        <AuthProvider Component={Component}>
        <Layout>{children}</Layout> 
        </AuthProvider>
    </QueryClientProvider>
    </Provider>
    </HeadProvider>
  )
}

export default MainProvider