import Layout from "components/layout/Layout"
import React, { FC } from "react"
import { QueryClient, QueryClientProvider } from "react-query"


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