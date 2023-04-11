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
        path: 'statics',
        element:<Statics></Statics>
      }
    ]
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
