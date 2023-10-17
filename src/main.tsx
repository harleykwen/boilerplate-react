import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { RouteProvider } from './router'
import { HelmetProvider } from 'react-helmet-async'
import { Head } from './components'
import { theme } from './theme'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouteProvider>
            <ChakraProvider resetCSS theme={theme}>
                <HelmetProvider>
                    <Head title='Boilerplate React' />
                    <App />
                </HelmetProvider>
            </ChakraProvider>
        </RouteProvider>
    </React.StrictMode>,
)
