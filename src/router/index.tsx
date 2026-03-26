import { createBrowserRouter } from "react-router-dom";
import HomePage from "@pages/HomePage/HomePage";
import EditUserPage from "@pages/EditUserPage/EditUserPage";
import Layout from "@components/Layout/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <HomePage />
      </Layout>
    ),
  },
  {
    path: "/edit/:userId",
    element: (
      <Layout>
        <EditUserPage />
      </Layout>
    ),
  },
]);
