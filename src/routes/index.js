import React, { Suspense, lazy } from "react";
import {
    RouterProvider,
    createBrowserRouter,
    createHashRouter,
    createMemoryRouter,
} from "react-router-dom";
import NoRoute from "../components/noRoute";
import ErrorBoundry from "../components/errorBoundry";
import Loader from "../components/loader";
import config from "../common/config";

const Home = lazy(() => import(/* webpackChunkName: 'home' */ "../pages/home"));
const ManageBeneficiary = lazy(() => import(/* webpackChunkName: 'manageBeneficiary' */ "../pages/manageBeneficiary"));

const routes = [
    {
        path: config.pageUrls.home,
        element: <Home />,
        errorElement: <ErrorBoundry />
    },
    {
        path: config.pageUrls.manageBeneficiary,
        element: <ManageBeneficiary />,
        errorElement: <ErrorBoundry />
    },
    {
        path: "*",
        element: <NoRoute />,
    },
];

const createCustomRouter = (routes, method) => {
    if (method === "browser") {
        return createBrowserRouter(routes);
    } else if (method === "hash") {
        return createHashRouter(routes, {});
    } else if (method === "memory") {
        return createMemoryRouter(routes, {});
    } else {
        throw new Error("Invalid router method specified");
    }
};

const Routes = () => {
    return (
        <Suspense fallback={<Loader />}>
            <RouterProvider router={createCustomRouter(routes, "browser")} />
        </Suspense>
    );
};

export default Routes;