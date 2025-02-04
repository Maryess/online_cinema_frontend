import Layout from "components/layout/Layout"
import React, { FC } from "react"
import { QueryClient, QueryClientProvider } from "react-query"
import ReduxToastr from "./ReduxToastr"
import { Provider } from "react-redux"
import { store } from "store/store"
import HeadProvider from "./HeadProvider"


const MainProvider:FC<{children:React.ReactNode}> = ({children}) => {

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
        <Layout>{children}</Layout> 
    </QueryClientProvider>
    </Provider>
    </HeadProvider>
  )
}

export default MainProvider