import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainRouter from './Router/MainRouter';
import ErrorPage from './Error/ErrorPage';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import AddProduct from './pages/AddProduct';
import MyCart from './pages/MyCart';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainRouter></MainRouter>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: ()=>fetch('http://localhost:5000/car')
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/addProduct',
        element: <AddProduct></AddProduct>
      },
      {
        path: '/car/:brand/:_id',
        element: <MyCart></MyCart>,
        loader: ({params})=> fetch(`http://localhost:5000/car/${params.brand}/${params._id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
