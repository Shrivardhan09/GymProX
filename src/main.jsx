import React from 'react'
import { createRoot } from "react-dom/client"
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import ExerciseDetails from './Sections/Exercise/ExerciseDetails/ExerciseDetails.jsx'

import Signup from './Sections/Auth/Signup.jsx'
import LogIn from './Sections/Auth/LogIn.jsx'



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/exercises/:id",
    element: <ExerciseDetails />,
  },
  {
    path: "/gymprox/signup",
    element: <Signup />,
  },
  {
    path: "/gymprox/login",
    element: <LogIn />,
  },

]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);


