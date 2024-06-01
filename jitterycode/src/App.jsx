import React from "react";
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import Pokemon from './pages/Pokemon';
import Wiki from './pages/Wiki';
import Layout from './components/Layout';
import SignIn from './pages/SignIn';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: "/home",
    element: <Layout />,
    //errorElement: <ErrorPage />,
    children: [
      { path: "", element: <Home /> },
      { path: "pokemon/:pokemonID", element: <Pokemon /> },
      { path: "wiki", element: <Wiki /> },
    ]
  },
  {
    path: "/",
    element: <SignIn />
  }
]);

function App() {
  return (
    <>
    <RouterProvider router={router} />
    </>
  );
}

export default App;