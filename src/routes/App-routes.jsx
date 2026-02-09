import React from 'react'
import App from '../App'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Working from '../pages/Working'
import Application from '../pages/Application'
import Products from '../components/common/Products'

import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <div>Error occured on router</div>,
        children: [
            { index: true, element: <Home />},
            { path: 'info', element: <div>Info page</div>},
            { path: 'contact', element: <Contact />},
            { path: 'about', element: <About />},
            { path: 'working', element: <Working />},
            { path: 'products', element: <Products />}
        ]
    },
    {
        path: '/application',
        element: <Application />,
        errorElement: <div>Error occured on router</div>
    }
])


export default router