import Layout from "components/layout/Layout"
import React, { FC } from "react"
import { QueryClient, QueryClientProvider } from "react-query"
import { Provider } from "react-redux"
import { configureStore } from "@reduxjs/toolkit";
import { movieApi } from "api/movie.api";


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
        <Layout>{children}</Layout> 
    </QueryClientProvider>
  )
}

export default MainProvider