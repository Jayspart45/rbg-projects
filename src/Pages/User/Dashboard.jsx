import { Outlet } from "react-router-dom";
import Filelist from "./Filelist";
import { useState } from "react";
let uploaded = 5;
let success = 3;
let error = 2;

const Dashboard = () => {
  const [sucees, setSucess] = useState("hidden");
  const [errors, setErrors] = useState("hidden");
  return (
    <div className="w-full h-screen bg-green-50 flex items-center justify-center">
      <div className="w-5/6 h-5/6 bg-white border border-solid border-black border-opacity-20 shadow">
        <div className="w-full flex items-center justify-around border-0 border-b border-solid border-black">
          <button
            className="bg-white py-1 px-2 rounded m-2 "
            onClick={() => {
              setSucess("hidden");
              setErrors("hidden");
            }}
          >
            Files Uploaded:{uploaded}
          </button>
          <button
            className="bg-white py-1 px-2 rounded m-2"
            onClick={() => {
              setSucess("");
              setErrors("hidden");
            }}
          >
            Success Files:{success}
          </button>
          <button
            className="bg-white py-1 px-2 rounded m-2"
            onClick={() => {
              setSucess("hidden");
              setErrors("");
            }}
          >
            Error Files:{error}
          </button>
        </div>
        <Outlet />
        <Filelist sucess={sucees} error={errors} />
      </div>
    </div>
  );
};

export default Dashboard;
