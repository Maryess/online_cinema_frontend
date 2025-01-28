import Layout from "components/layout/Layout"
import React, { FC } from "react"
import { QueryClient, QueryClientProvider } from "react-query"
import { Provider } from "react-redux"
import { configureStore } from "@reduxjs/toolkit";
import { movieApi } from "api/movie.api";


export const makeStore = () => {
    return configureStore({
        reducer:{[movieApi.reducerPath] : movieApi.reducer},
        middleware: getDefaultMiddleWare => getDefaultMiddleWare().concat(movieApi.middleware)
    })
}

export const store = makeStore()

export type TypeRootStore = ReturnType<typeof store.getState>

const MainProvider:FC<{children:React.ReactNode}> = ({children}) => {

const queryClient = new QueryClient({
    defaultOptions:{
        queries:{
            refetchOnWindowFocus:false
        }
    }
})
    
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Layout>{children}</Layout> 
      </Provider>  
    </QueryClientProvider>
  )
}

export default MainProvider