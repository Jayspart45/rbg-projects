import { useState } from "react";
import LoginImg from "../assets/Images/Secure.gif";

const Login = () => {
  const [admin, setAdmin] = useState(
    "bg-white text-Green rounded-t-lg rounded-tr-lg"
  );
  const [user, setUser] = useState("bg-Green text-white rounded-bl-lg");
  const [action, setAction] = useState("rounded-tr-lg");
  const adminhandleClick = () => {
    setAdmin("bg-white text-Green rounded-t-lg rounded-tr-lg");
    setUser("bg-Green text-white rounded-bl-lg");
    setAction("rounded-tr-lg");
  };
  const userhandleClick = () => {
    setAdmin("bg-Green text-white rounded-br-lg");
    setUser("bg-white text-Green rounded-t-lg ");
    setAction("rounded-tl-lg");
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
          <div className="flex  w-full justify-evenly bg-Green ">
            <div
              className={`w-1/2 flex py-4 items-center justify-center cursor-pointer  ${admin}`}
              onClick={adminhandleClick}
            >
              <button className={`text-xl font-semibold h-full`}>Admin</button>
            </div>
            <div
              className={`w-1/2 flex py-4 items-center justify-center cursor-pointer ${user}`}
              onClick={userhandleClick}
            >
              <button className={`text-xl font-semibold  h-full`}>User</button>
            </div>
          </div>
          <form className={`${action}`}>
            <div className="px-3">
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

export default Login;
