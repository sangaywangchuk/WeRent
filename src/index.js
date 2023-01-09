import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import { store } from './state/store'
import Home  from './components/Home'
import RentList from './components/RentList'
import CreateRent from './components/CreateRent'
import RentDetail from './components/RentDetail'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
     children: [
      {
        path: '/',
        element: <Home/>
      },
       {
         path: '/rent-list',
         element: <RentList />
       },
       {
         path: '/create-rent',
         element: <CreateRent />
       },
       {
         path: '/rent-detail/:id',
         element: <RentDetail />
       }
     ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
