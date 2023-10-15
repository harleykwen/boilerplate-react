import React, { LazyExoticComponent, lazy } from 'react'
import { ROUTE_NAME } from '.'
import { Route, Routes } from 'react-router-dom'

const Home: LazyExoticComponent<any> = lazy(() => import('../pages/Home/Home'))
const NotFound: LazyExoticComponent<any> = lazy(() => import('../pages/NotFound/NotFound'))

const Router: React.FC = () => {
    return (
        <Routes>
            <Route path={ROUTE_NAME?.HOME} element={<Home />} />
            <Route path='/*' element={<NotFound />} />
        </Routes>
    )
}

export default Router