import React from "react";
import { Outlet, createBrowserRouter } from "react-router-dom";
import { Support, Plugins, Help, Dashboard } from "../pages";
import SideBar from "../components/SideBar";
import Wrapper from "../layout/Wrapper";

const AppLayout = () => {
  return (
    <>
      <div className="flex w-full">
        <SideBar />
        <Wrapper>
          <Outlet />
        </Wrapper>
      </div>
    </>
  );
};

export const appRouter = createBrowserRouter([
  {
    path: "",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/support",
        element: <Support />,
      },
      {
        path: "/plugins",
        element: <Plugins />,
      },
      {
        path: "/help",
        element: <Help />,
      },
    ],
  },
]);
