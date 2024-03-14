import React, { LazyExoticComponent, lazy } from 'react'
import { ROUTE_NAME } from '.'
import { Error } from '../pages'
import { Route, Routes } from 'react-router-dom'

const Home: LazyExoticComponent<any> = lazy(() => import('../pages/Home/Home'))

const Router: React.FC = () => {
    return (
        <Routes>
            <Route path={ROUTE_NAME?.HOME} element={<Home />} />
            <Route path='/*' element={<Error errorCode={404} errorMessage='PAGE NOT FOUND' />} />
        </Routes>
    )
}

export default Router