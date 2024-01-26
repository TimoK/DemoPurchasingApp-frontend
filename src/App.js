import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainWrapper from "./pages/MainWrapper";
import BuyProcedureOverview from "./pages/BuyProcedureOverview";
import About from "./pages/About";
import PhasePage from "./pages/PhasePage";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainWrapper />,
      children: [
        { index: true, element: <BuyProcedureOverview /> },
        { path: "about", element: <About /> },
        {
          path: ":id",
          children: [{ path: ":phaseId", element: <PhasePage /> }],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
