import ErrorPage from "./Pages/ErrorPage";
import Login from "./Pages/Login ";
import {User,Views,Output} from "./Pages/User/User";
import Createuser from "./Pages/Admin/Createuser";
import {Admin,ManageUser} from "./Pages/Admin/Admin";
import { createBrowserRouter,RouterProvider } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/user",
    element: <User />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/user/",
        element: <Views />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/user/dashboard",
        element: <Views />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/user/output",
        element: <Output />,
        errorElement: <ErrorPage />,
      },
    ],
  },
  {
    path: "/admin",
    element: <Admin />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/admin/",
        element: <Createuser />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/admin/createuser",
        element: <Createuser />,
        errorElement: <ErrorPage />,
      },
      {
        path:'/admin/manageuser',
        element:<ManageUser/>,
        errorElement:<ErrorPage/>
      }
    ]
  }
])

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
