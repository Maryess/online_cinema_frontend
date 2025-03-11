import React, { FC } from 'react'
import Head from 'next/head'
import { IMeta } from './meta.interface'
import { useRouter } from 'next/router'
import { siteName, titleMerge } from 'config/seo.config'
import { onlyText } from 'utils/string /clearText'

const Meta:FC<IMeta> = ({title,description,image,children}) => {
  const {asPath} = useRouter()
  const currentUrl = `${process.env.APP_URL}/${asPath}`

  return (
    <div>
        <Head>
          <title itemProp='headline'>{titleMerge(title)}</title>
          {description? 
          <div>
            <meta itemProp='description' name='description' content={onlyText(description,152)}/>
            <link rel="canonical" href={currentUrl} />
            <meta property='og:locale' content='en'/>
            <meta property='og:title' content={titleMerge(title)}/>
            <meta property='og:url'content={currentUrl}/>
            <meta property='og:image' content={image}/>
            <meta property='og:site_name' content={siteName}/>
            <meta property='og:description'
            content={onlyText(description,197)}
            />
          </div>   
          : 
          <meta name='robots' content='noindex, nofollow'/>
          }  
        </Head>
    {children}
    </div>

  )
}

export default Meta