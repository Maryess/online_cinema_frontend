import  React, { FC } from 'react'
import NextProgressBar from 'nextjs-progressbar'
import { accentColor } from 'config/constants'
import Head from 'next/head'


const HeadProvider:FC<{children:React.ReactNode}> = ({children}) => {
  return (
    <>
        <NextProgressBar
        color={accentColor}
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        />
        <Head>
            <meta charSet='UTF-8'/>
            <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1.0'/>
            <meta name='themeColor' content='#181B1E'/>
            <meta name='msapplication-navbutton-color' content='#181B1E'/>
            <meta name='apple-mobile-web-status-bar-style' content='#181B1E'/>    
        </Head>
        {children}
    </>
  )
}

export default HeadProvider