import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouteProvider } from './router'
import { HelmetProvider } from 'react-helmet-async'
import { Head } from './components'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouteProvider>
            <HelmetProvider>
                <Head title={document?.title} />
                <App />
            </HelmetProvider>
        </RouteProvider>
    </React.StrictMode>,
)
