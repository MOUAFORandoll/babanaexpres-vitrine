import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Pages/Home'
import NotFound from './Pages/NotFound';
import Download from './Pages/Download';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Marketplace from './Pages/Marketplace';

const routes = createBrowserRouter([
  {
    path: "/",
    Component: Home,
    errorElement: <NotFound />,
  },
  {
    path: "/download",
    Component: Download,
    errorElement: <NotFound />
  },
  {
    path: "/contact",
    Component: Contact,
    errorElement: <NotFound />
  },
  {
    path: "/about",
    Component: About,
    errorElement: <NotFound />
  },
  {
    path: "/marketplace",
    Component: Marketplace,
    errorElement: <NotFound />,
  }
]);

export default function App() {
  return (
    <RouterProvider router={routes} />
  )
}
