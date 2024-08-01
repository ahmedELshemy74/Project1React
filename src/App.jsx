import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Layout from './Components/Layout/Layout.jsx'
import Portfolio from './Components/Portfolio/Portfolio.jsx'
import NotFound from './Components/NotFound/NotFound.jsx'


let routers = createBrowserRouter([
  {
    path: '', element: <Layout />, children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      { path: 'portfolio', element: <Portfolio /> },
      { path: '*', element: <NotFound /> },
  ]}
])
function App() {

  
  return <RouterProvider router={routers}></RouterProvider>
  
  
}

export default App
