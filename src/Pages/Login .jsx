import { useContext, useState } from "react";
import LoginImg from "../assets/Images/Secure.gif";
import { useImmer } from "use-immer";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";
import { UserContext } from "../Context/Context";
import lg from './Utility'

const Login = () => {
  lg.clear()
  const {setName} =useContext(UserContext)
  const navigate = useNavigate();
  const [admin, setAdmin] = useState("bg-Green text-white rounded-bl-lg");
  // ("bg-Green text-white rounded-bl-lg");
  const [user, setUser] = useState(
    "bg-white text-Green rounded-t-lg rounded-tr-lg"
  );
  const [person, setPerson] = useState("user");
  const [adminLogin, setAdminLogin] = useImmer({
    username: "",
    email: "",
    password: "",
  });
  const [userLogin, setUserLogin] = useImmer({
    username: "",
    email: "",
    password: "",
  });
  const handleAdminChange = (e) => {
    const { name, value } = e.target;
    setAdminLogin((draft) => {
      draft[name] = value;
    });
  };
  const handleUserChange = (e) => {
    const { name, value } = e.target;
    setUserLogin((draft) => {
      draft[name] = value;
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (person === "admin") {
      try {
        let endpoint = "http://3.110.154.99:8004/signin";
        let formdata = new FormData();
        formdata.append("person", "admin");
        formdata.append("name", adminLogin.name);
        formdata.append("email", adminLogin.email);
        formdata.append("password", adminLogin.password);
        const response = await axios.post(endpoint, formdata);
        console.log(response.status);
        if (response.status == 200) {
          setName(adminLogin.username)
          lg.save('user_name',adminLogin.name)
          navigate("/admin");
        }
      } catch (error) {
        alert("invalid credentials");
      }
    } else {
      try {
        let endpoint = "http://3.110.154.99:8004/signin";
        console.log("login");
        let formdata = new FormData();
        formdata.append("person", "user");
        formdata.append("name", userLogin.name);
        formdata.append("email", userLogin.email);
        formdata.append("password", userLogin.password);
        const response = await axios.post(endpoint, formdata);
        console.log(response);
        console.log(response.status);
        if (response.status == 200) {
          const id = response.data.user.id
          const name = response.data.user.name
          lg.save('user_id',id)
          lg.save('user_name',name)
          setName(userLogin.username)
          navigate("/user");
        }
      } catch (error) {
        alert("invalid credentials");
        console.log(error);
      }
    }
    setUserLogin((draft) => {
      draft.username = "";
      draft.email = "";
      draft.password = "";
    });
    setAdminLogin((draft) => {
      draft.username = "";
      draft.email = "";
      draft.password = "";
    });
  };

  const adminhandleClick = () => {
    setAdmin("bg-white text-Green rounded-t-lg rounded-tr-lg");
    setUser("bg-Green text-white rounded-bl-lg");
    setPerson("admin");
    setUserLogin((draft) => {
      draft.username = "";
      draft.email = "";
      draft.password = "";
    });
  };
  const userhandleClick = () => {
    setAdmin("bg-Green text-white rounded-br-lg");
    setUser("bg-white text-Green rounded-t-lg ");
    setPerson("user");
    setAdminLogin((draft) => {
      draft.username = "";
      draft.email = "";
      draft.password = "";
    });
  };
  return (
    <div className="min-h-screen flex flex-col justify-center bg-Green ">
      <div className="text-center bg-Green text-3xl text-white font-semibold font-Poppins tracking-widest">
        RBG.AI
      </div>
      <div className="flex flex-col md:flex-row items-center md:justify-evenly md:px-24 m-2 ">
        <div className="h-full">
          <img src={LoginImg} alt="" className="hidden lg:block" />
        </div>
        <div className="w-full max-w-md bg-blend-saturation bg-white rounded-lg top-0 ">
          <div className="pb-3  bg-Green">
            <h1 className=" text-center tracking-widest text-2xl text-white font-semibold uppercase">
              Login
            </h1>
          </div>
          <div className="flex  w-full justify-evenly bg-Green">
            <div
              onClick={adminhandleClick}
              className={`w-1/2 flex py-4 cursor-pointer items-center justify-center  ${admin}`}
            >
              <button className={`text-xl font-semibold h-full`}>Admin</button>
            </div>
            <div
              onClick={userhandleClick}
              className={`w-1/2 flex py-4 cursor-pointer items-center justify-center  ${user}`}
            >
              <button className={`text-xl font-semibold  h-full`}>User</button>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="p-3">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                onChange={
                  person === "admin" ? handleAdminChange : handleUserChange
                }
                value={
                  person === "admin" ? adminLogin.username : userLogin.username
                }
                className="mt-1 p-2 w-full border rounded-md outline-none"
                placeholder="John"
                required
              />
            </div>
            <div className="px-3 py-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 p-2 w-full border rounded-md outline-none"
                placeholder="sample@example.com"
                value={person === "admin" ? adminLogin.email : userLogin.email}
                onChange={
                  person === "admin" ? handleAdminChange : handleUserChange
                }
                required
              />
            </div>

            <div className="mb-4 px-3">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-600"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="mt-1 p-2 w-full border rounded-md outline-none"
                placeholder="********"
                value={
                  person === "admin" ? adminLogin.password : userLogin.password
                }
                onChange={
                  person === "admin" ? handleAdminChange : handleUserChange
                }
                required
              />
            </div>
            <div className="py-2 p-3">
              <button
                type="submit"
                className="w-full bg-Green text-white py-2 rounded-md active:bg-green-600 duration-150"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {
  adminData: PropTypes.object,
};

export default Login;
