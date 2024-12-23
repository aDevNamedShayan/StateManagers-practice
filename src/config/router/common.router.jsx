import { Layout } from "../../App/Layout/Layout";
import { Landing } from "../../Screens/Landing";
import { createBrowserRouter } from "react-router-dom";
import { ErrorRoutes } from "../../Screens/Errors/ErrorRoutes/ErrorRoutes";
import { AboutsUs } from "../../Screens/AboutUs";

// routes that are available both as public and auth
export const commonRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorRoutes />,
    children: [
      {
        index: true,
        path: "/",
        element: <Landing />,
      },
      {
        path: "/AboutUs",
        element: <AboutsUs />,
      },
    ],
  },
]);
