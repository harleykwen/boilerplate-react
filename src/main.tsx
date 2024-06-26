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
import { ReactQueryDevtools } from 'react-query/devtools'
import { QueryClient, QueryClientProvider } from 'react-query'

const ENV = import.meta.env.VITE_ENV
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            retry: false,
        },
        mutations: {
            retry: false,
        },
    },
})
const options = {
    api_host: import.meta.env.VITE_APP_PUBLIC_POSTHOG_HOST,
}

const MainApp = () => {
    return (
        <RouteProvider>
            <ChakraProvider theme={theme}>
                <HelmetProvider>
                    <Head title='Weather App' />

                    {Boolean(import.meta.env.VITE_IS_TOGGLE_FEATURE)
                        ?   <PostHogProvider
                                apiKey={import.meta.env.VITE_APP_PUBLIC_POSTHOG_KEY}
                                options={options}
                            >
                                <QueryClientProvider client={queryClient}>
                                    {ENV == 'DEVELOPMENT'
                                        ?   <ReactQueryDevtools initialIsOpen={false} />
                                        :   null
                                    }
                                    <App />
                                </QueryClientProvider>
                            </PostHogProvider>
                        :   <QueryClientProvider client={queryClient}>
                                {ENV == 'DEVELOPMENT'
                                    ?   <ReactQueryDevtools initialIsOpen={false} />
                                    :   null
                                }
                                <App />
                            </QueryClientProvider>
                    }
                </HelmetProvider>
            </ChakraProvider>
        </RouteProvider>
    )
}

ENV == 'DEVELOPMENT' && console.log({ theme })

ENV == 'DEVELOPMENT' && ReactDOM.createRoot(document.getElementById('root')!).render(
    <MainApp />,
)

ENV != 'DEVELOPMENT' && ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <MainApp />
    </React.StrictMode>,
)