import React from 'react'
import usePosthog from './hooks/usePosthog'
import { Router } from './router'
import { Error, Loader } from './pages'

const App: React.FC = () => {
    const { FEATURE_FLAG_IS_UNDER_MAINTENANCE } = usePosthog()

    if (FEATURE_FLAG_IS_UNDER_MAINTENANCE === undefined) return <Loader />

    if (FEATURE_FLAG_IS_UNDER_MAINTENANCE) return <Error errorCode={503} errorMessage='SYSTEM IS UNDER MAINTENANCE' />

    return <Router />
}

export default App