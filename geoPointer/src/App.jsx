
import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { AppLayout } from './components2/Layout/AppLayout'

import "./App.css"
import { Home } from './components/Home'
import { About } from './components/About'
import { Country } from './components/Country'
import { Contact } from './components/Contact'
import { ErrorPage } from './components/ErrorPage'
import {CountryDetails} from './components2/Layout/CountryDetails'

const router = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout />,
    errorElement: <ErrorPage />,
    children:[
  {
  path:"/",
  element: <Home />,
  },
  {
    path:"about",
    element: <About />,
 },
 {
  path:"country",
  element: <Country />,
  },
  {
     //  "/" use karne k baad jab : use karte hai to then it is known as dynamic root 
    path:"country/:id",       
    element: <CountryDetails />,
    },
  {
    path:"contact",
    element: <Contact />,
    }
  ]}
])

function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App