import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainWrapper from "./pages/MainWrapper";
import BuyProcedureOverview from "./pages/BuyProcedureOverview";
import BuyProcedurePage from "./pages/BuyProcedurePage";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainWrapper />,
      children: [
        { index: true, element: <BuyProcedureOverview /> },
        { path: ":id", element: <BuyProcedurePage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
