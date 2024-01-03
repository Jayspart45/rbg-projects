import ErrorPage from "./Pages/ErrorPage";
import Login from "./Pages/Login ";
import User from "./Pages/User/User";
import { createBrowserRouter,RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path:'/',
    element:<Login/>,
    errorElement:<ErrorPage/>
  },
  {
    path:'/user',
    element:<User/>,
    errorElement:<ErrorPage/>
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
