import ErrorPage from "./Pages/ErrorPage";
import Login from "./Pages/Login ";
import {User,Views} from "./Pages/User/User";
import {Admin,ManageUser} from "./Pages/Admin/Admin";
import { createBrowserRouter,RouterProvider } from "react-router-dom";

const admin = {
  username:'Admin',
  email:'admin123@gmail.com',
  password:'Sp@rk@123'
}

const router = createBrowserRouter([
  {
    path:'/',
    element:<Login adminData={admin}/>,
    errorElement:<ErrorPage/>
  },
  {
    path:'/user',
    element:<User/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:'/user/',
        element:<Views/>,
        errorElement:<ErrorPage/>
      },
      {
        path:'/user/dashboard',
        element:<Views/>,
        errorElement:<ErrorPage/>
      }
    ]
  },
  {
    path:'/admin',
    element:<Admin/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:'/admin/createuser',
        element:<div>Create</div>,
        errorElement:<ErrorPage/>
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
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
