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
import Cars from './pages/Cars';
import UpdateCar from './pages/UpdateCar';
import AuthProvider from './provider/AuthProvider';
// import Cart from './pages/Cart';

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
        path: '/updateCar/:brand/:_id',
        element: <UpdateCar></UpdateCar>,
        loader: ({params})=> fetch(`http://localhost:5000/car/${params.brand}/${params._id}`) 
      },
      {
        path: '/myCart',
        element: <MyCart></MyCart>
      },
      {
        path: '/car/:brand/:_id',
        element: <Cars></Cars>,
        loader: ({params})=> fetch(`http://localhost:5000/car/${params.brand}/${params._id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProvider>
        <RouterProvider router={router}/>
     </AuthProvider>
  </React.StrictMode>,
)
