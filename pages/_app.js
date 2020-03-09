import React from 'react'
import App from 'next/app';
import Theme from '../providers/ThemeProvider'
import {config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false;

function MyApp({Component, pageProps}){
    return( 
        <Theme>
        <Component {...pageProps}/>
        </Theme>
    )
}

export default MyApp;