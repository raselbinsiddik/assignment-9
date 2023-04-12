import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Jobs from './components/Jobs/Jobs';
import Details from './components/Details/Details';
import Applied from './components/Applied/Applied';
import Statics from './components/Statics/Statics';
import cartjobLoader from './jobData/jobLoaderData';
import View from './components/View/View';
import Blog from './components/Blog/Blog';
import Error from './components/Error/Error';



const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Jobs></Jobs>,
        loader: () => fetch('/jobsData.json'),
    },
      {
        path: 'details/:dId',
        element: <Details></Details>,
        loader: ({ params }) => fetch('/jobsData.json')
      },
     
      {
        path: 'applied',
        element: <Applied></Applied>,
        loader: cartjobLoader
      },
      {
        path: 'view/:aId',
        element: <View></View>,
        loader: ({ params }) => fetch('/jobsData.json')
      },
      {
        path: 'statics',
        element:<Statics></Statics>
      },
      {
        path: 'blog',
        element:<Blog></Blog>
      },
      {
        path: '*',
        element: <Error></Error>
      }
    ]
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
