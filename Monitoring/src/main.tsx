import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Homepage from "./Pages/Homepage.tsx";
import AboutUs from "./Pages/AboutUs.tsx";
import Dashboard from "./Pages/Dashboard.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ErrorElement from "./Components/ErrorElement.tsx";

const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: <Dashboard />,
    errorElement: <ErrorElement />,
  },
  {
    path: "/homepage",
    element: <Homepage />,
    errorElement: <ErrorElement />,
  },
  {
    path: "/about",
    element: <AboutUs />,

    errorElement: <ErrorElement />,
  },
  {
    path: "/",
    element: <Homepage />,
    errorElement: <ErrorElement />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
