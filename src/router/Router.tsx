import React, { LazyExoticComponent, lazy } from 'react'
import { ROUTE_NAME } from '.'
import { Error } from '../pages'
import { Route, Routes } from 'react-router-dom'

const Weather: LazyExoticComponent<any> = lazy(() => import('../pages/Weather/Weather'))

const Router: React.FC = () => {
    return (
        <Routes>
            <Route path={ROUTE_NAME?.HOME} element={<Weather />} />
            <Route path='/*' element={<Error errorCode={404} errorMessage='PAGE NOT FOUND' />} />
        </Routes>
    )
}

export default Router