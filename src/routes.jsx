import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home/App";
import { Server } from "./pages/Servers/App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>error /</h1>,
  },
  {
    path: "/servers",
    element: <Server />,
  },
]);
