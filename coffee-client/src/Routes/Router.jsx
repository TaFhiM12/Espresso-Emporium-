import { createBrowserRouter } from "react-router";
import { lazy, Suspense } from "react";
import PrivateRouter from "./PrivateRouter";
import ErrorBoundary from "../Components/ErrorBoundary";
import LoadingSpinner from './../Components/LoadingSpinner';

const MainLayout = lazy( () => import("../Layouts/MainLayout"));
const Home = lazy(() => import("../Components/Home"));
const AddCoffee = lazy(() => import("../Components/AddCoffee"));
const UpdateCoffee = lazy(() => import("../Components/UpdateCoffee"));
const Signup = lazy(() => import("../Components/Signup"));
const Signin = lazy(() => import("../Components/Signin"));
const Users = lazy(() => import("../Components/Users"));
const CoffeeDetails = lazy(() => import("../Components/CoffeeDetails"));




export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorBoundary />,
    hydrateFallback: <LoadingSpinner />,
    children: [
      {
        index: true,
        loader: () => fetch("http://localhost:3000/coffees"),
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <Home />
          </Suspense>
        ),
        hydrateFallback: <LoadingSpinner />,
      },
      {
        path: "/addCoffee",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <PrivateRouter>
              <AddCoffee />
            </PrivateRouter>
          </Suspense>
        ),
        hydrateFallback: <LoadingSpinner />,
      },
      {
        path: "/coffee/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/coffees/${params.id}`),
        element: (
          <Suspense fallback={<LoadingSpinner />}>
              <CoffeeDetails />
          </Suspense>
        ),
        hydrateFallback: <LoadingSpinner />,
      },
      {
        path: "/updateCoffee/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/coffees/${params.id}`),
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <PrivateRouter>
              <UpdateCoffee />
            </PrivateRouter>
          </Suspense>
        ),
        hydrateFallback: <LoadingSpinner />,
      },
      {
        path: "/signup",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <Signup />
          </Suspense>
        ),
        hydrateFallback: <LoadingSpinner />,
      },
      {
        path: "/signin",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <Signin />
          </Suspense>
        ),
        hydrateFallback: <LoadingSpinner />,
      },
      {
        path: "/users",
        loader: () => fetch("http://localhost:3000/users"),
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <PrivateRouter>
              <Users />
            </PrivateRouter>
          </Suspense>
        ),
        hydrateFallback: <LoadingSpinner />,
      },
    ],
  },
]);