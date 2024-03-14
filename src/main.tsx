import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { RouteProvider } from './router'
import { HelmetProvider } from 'react-helmet-async'
import { Head } from './components'
import { theme } from './theme'
import { PostHogProvider} from 'posthog-js/react'

const options = {
    api_host: import.meta.env.VITE_APP_PUBLIC_POSTHOG_HOST,
}

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouteProvider>
            <ChakraProvider theme={theme}>
                <HelmetProvider>
                    <Head title='Boilerplate React' />
                    <PostHogProvider
                        apiKey={import.meta.env.VITE_APP_PUBLIC_POSTHOG_KEY}
                        options={options}
                    >
                        <App />
                    </PostHogProvider>
                </HelmetProvider>
            </ChakraProvider>
        </RouteProvider>
    </React.StrictMode>,
)
