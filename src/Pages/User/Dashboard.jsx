import { Outlet } from "react-router-dom";
import Filelist from "./Filelist";
import { useState } from "react";
let uploaded = 5;
let success = 3;
let error = 2;

const Dashboard = () => {
  const [sucees, setSucess] = useState("hidden");
  const [errors, setErrors] = useState("hidden");
  const [active, Setactive] = useState({
    s1: "text-Green",
    s2: "text-black",
    s3: "text-black",
  });
  return (
    <div className="w-full h-screen bg-green-50 flex items-center justify-center  ">
      <div className="w-5/6 h-5/6 bg-white border border-solid border-black border-opacity-20 shadow overflow-y-auto">
        <div className="w-full flex items-center bg-white justify-around border-0 border-b border-solid border-black sticky top-0 z-10">
          <button
            className={`bg-white py-1 px-2 rounded m-2 text-sm md:text-lg font-medium ${active.s1} `}
            onClick={() => {
              setSucess("hidden");
              setErrors("hidden");
              Setactive({
                s1: "text-Green",
                s2: "text-black",
                s3: "text-black",
              });
            }}
          >
            Files Uploaded:{uploaded}
          </button>
          <button
            className={`bg-white py-1 px-2 rounded m-2 text-sm md:text-lg  font-medium ${active.s2}`}
            onClick={() => {
              setSucess("");
              setErrors("hidden");
              Setactive({
                s1: "text-black",
                s2: "text-Green",
                s3: "text-black",
              });
            }}
          >
            Success Files:{success}
          </button>
          <button
            className={`bg-white py-1 px-2 rounded m-2 text-sm md:text-lg font-medium ${active.s3}`}
            onClick={() => {
              setSucess("hidden");
              setErrors("");
              Setactive({
                s1: "text-black",
                s2: "text-black",
                s3: "text-Green",
              });
            }}
          >
            Error Files:{error}
          </button>
        </div>
        <Outlet />
        <Filelist sucess={sucees} error={errors} />
        <Filelist sucess={sucees} error={errors} />
        <Filelist sucess={sucees} error={errors} />
        <Filelist sucess={sucees} error={errors} />
        <Filelist sucess={sucees} error={errors} />
        <Filelist sucess={sucees} error={errors} />
        <Filelist sucess={sucees} error={errors} />
        <Filelist sucess={sucees} error={errors} />
        <Filelist sucess={sucees} error={errors} />
        <Filelist sucess={sucees} error={errors} />
        <Filelist sucess={sucees} error={errors} />
        <Filelist sucess={sucees} error={errors} />
        <Filelist sucess={sucees} error={errors} />
        <Filelist sucess={sucees} error={errors} />
        <Filelist sucess={sucees} error={errors} />
        <Filelist sucess={sucees} error={errors} />
        <Filelist sucess={sucees} error={errors} />
        <Filelist sucess={sucees} error={errors} />
        <Filelist sucess={sucees} error={errors} />
        <Filelist sucess={sucees} error={errors} />
        <Filelist sucess={sucees} error={errors} />
        <Filelist sucess={sucees} error={errors} />
        <Filelist sucess={sucees} error={errors} />
        <Filelist sucess={sucees} error={errors} />
        <Filelist sucess={sucees} error={errors} />
        <Filelist sucess={sucees} error={errors} />
        <Filelist sucess={sucees} error={errors} />
        <Filelist sucess={sucees} error={errors} />
      </div>
    </div>
  );
};

export default Dashboard;
