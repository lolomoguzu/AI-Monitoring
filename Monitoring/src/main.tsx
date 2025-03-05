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
    path: "/Dashboard",
    element: <Dashboard />,
    errorElement: <ErrorElement />,
  },
  {
    path: "/Homepage",
    element: <Homepage />,
    errorElement: <ErrorElement />,
  },
  {
    path: "/About",
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
