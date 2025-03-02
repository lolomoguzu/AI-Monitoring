import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Homepage from "./Pages/Homepage.tsx";
import AboutUs from "./Pages/AboutUs.tsx";
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

const router = createBrowserRouter([{
path: "/",
element: <App/>,
},
{
path: "/Homepage",
element : <Homepage />,
},
{
path: "/About",
element : <AboutUs />,
}
]);


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
);
