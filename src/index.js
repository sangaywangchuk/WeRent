import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux'
import { store } from './state/store'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const App = React.lazy(() => import("./App"));

const Home = React.lazy(() => import("./components/Home"));
const RentList = React.lazy(() => import("./components/RentList"));
const CreateRent = React.lazy(() => import("./components/CreateRent"));
const RentDetail = React.lazy(() => import("./components/RentDetail"));
const Loader = React.lazy(() => import("./components/loader"));




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
  <Suspense fallback={<Loader />}>
    <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </React.StrictMode>
  </Suspense>
);
