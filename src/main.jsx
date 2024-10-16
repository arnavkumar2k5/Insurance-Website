import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Travel from './Pages/Travel.jsx'
import HomeInsurance from './Pages/HomeInsurance.jsx'
import AutoMobileInsurance from './Pages/AutoMobileInsurance.jsx'
import RestaurantInsurance from './Pages/RestaurantInsurance.jsx'
import Warehouse from './Pages/Warehouse.jsx'
import GeneralLiability from './Pages/GeneralLiability.jsx'
import Auto from './Pages/Auto.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/travel',
        element: <Travel/>,
      },
      {
        path: '/homeinsurance',
        element: <HomeInsurance/>
      },
      {
        path: '/automobileinsurance',
        element: <AutoMobileInsurance/>
      },
      {
        path: '/restaurantinsurance',
        element: <RestaurantInsurance/>
      },
      {
        path: '/warehouse',
        element: <Warehouse/>
      },
      {
        path: '/general',
        element: <GeneralLiability/>
      },
      {
        path: '/auto',
        element: <Auto/>
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
