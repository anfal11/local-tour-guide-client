import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './routes/Router'
import AuthProvider from './context/AuthProvider'
import { Toaster } from 'react-hot-toast'
import { Helmet } from 'react-helmet'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={Router}>
    <Helmet>
          <title>TourEase</title> 
        </Helmet>
    </RouterProvider>
    <Toaster position="top-right"/>
    </AuthProvider>
  </React.StrictMode>,
)
