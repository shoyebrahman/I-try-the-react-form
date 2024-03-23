import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Component/Home/Home.jsx';
import About from './Component/About/About.jsx';
import Contuct from './Component/Contuct/Contuct.jsx';
import User from './Component/User/User.jsx';
import ErrorPage from './Component/ErrorPage/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contuct',
        element: <Contuct></Contuct>
      },
      {
        path: '/user',
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/users'),
        element: <User></User>
      }
    ]
  },
  {
    path: '/about',
    element: <div>i am in the about page</div>
  },
  {
    path: '/contuct',
    element: <div>contuct with me </div>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
    <App/>
  </React.StrictMode>,
)
