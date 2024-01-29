/* eslint-disable no-unused-vars */
import { Outlet } from "react-router-dom";
import Filelist from "./Filelist";
import { useEffect, useState } from "react";
import ls from "../Utility";
import axios from "axios";
// let uploaded = 5;
// let success = 3;
// let error = 2;

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [sucees, setSucess] = useState("hidden");
  const [errors, setErrors] = useState("hidden");
  const [active, Setactive] = useState({
    s1: "text-Green",
    s2: "text-black",
    s3: "text-black",
  });
  const id = ls.get("user_id");
  const outputs = ls.get("outputs");
  console.log(outputs);
  useEffect(() => {
    const get_outputs = async () => {
      try {
        let endpoint = `http://13.201.163.31:8004/outputs/${id}`;
        const response = await axios.get(endpoint);
        // console.log(response)
        if (response.status == 200) {
          // setData((prevData) => {
          //   const updatedData = prevData.map((item) => {
          //     const matchingResponseData = response.data.find(
          //       (responseItem) =>
          //         responseItem.file_id === item.file_id
          //     );
          //     console.log(matchingResponseData);

          //     if (matchingResponseData) {
          //       return { ...item, ...matchingResponseData };
          //     }

          //     return item;
          //   });

          //   console.log(updatedData);

          //   return updatedData;
          // });
          console.log(response);
          setData(response.data);
          ls.save("outputs", response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    get_outputs();
  }, [id]);

  return (
    <div className="w-full font-Poppins h-screen bg-green-50 flex items-center justify-center  ">
      <div className="w-5/6 h-5/6 bg-white border border-solid border-black border-opacity-20 shadow overflow-y-auto">
        <div className="w-full grid grid-cols-6  bg-white  border-0 border-b left-0 sticky top-0 z-10">
          <button
            className={`bg-white font-semibold py-1 px-2 rounded m-2 text-sm md:text-lg   text-zinc-700`}
          >
            Date
          </button>
          <button
            className={`bg-white font-semibold py-1 px-2 rounded m-2 text-sm md:text-lg   text-zinc-700`}
          >
            Request Id
          </button>

          <button
            className={`bg-white font-semibold py-1 px-2 rounded m-2 text-sm md:text-lg   text-zinc-600`}
          >
            PDF
          </button>
          <button
            className={`bg-white font-semibold py-1 px-2 rounded m-2 text-sm md:text-lg   text-zinc-600`}
          >
            Masked PDF
          </button>
          <button
            className={`bg-white font-semibold py-1 px-2 rounded m-2 text-sm md:text-lg   text-zinc-600`}
          >
            Status
          </button>
          <button
            className={`bg-white font-semibold py-1 px-2 rounded m-2 text-sm md:text-lg   text-zinc-600`}
          >
            Error File
          </button>
          {/* <button
            className={`bg-white font-semibold py-1 px-2 rounded m-2 text-sm md:text-lg   text-zinc-600`}
          >
            Log
          </button> */}
        </div>
        <Outlet />
        {data.map((item, index) => (
          <Filelist key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
