import { useEffect } from "react";
import { useState } from "react";
import GridBox from "./GridBox";
import UploadFile from "./UploadFile";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

const Views = () => {
  const [dataArray, setDataArray] = useState([]);
  const handleDataFromChild = (data) => {
    setDataArray(data);
  };
  const [view, setView] = useState("list");
  const [theme, setTheme] = useState({
    grid: "bg-slate-100 bg-opacity-30",
    list: "",
  });
  const [loading, setLoading] = useState(false);

  //changing button background color on click

  useEffect(() => {
    view === "grid"
      ? setTheme({
          grid: "bg-black text-white bg-opacity-65",
          list: "",
        })
      : setTheme({
          grid: "",
          list: "bg-black text-white bg-opacity-65",
        });
  }, [view]);
  const setGrid = () => {
    setView("grid");
  };
  const setList = () => {
    setView("list");
  };

  const Request = (endpoint,formdata) =>{
    const request = axios.post(endpoint,formdata,{
      headers:{
        "Content-Type":"multipart/form-data"
      }
    })
    request.then(res=>console.log(res)).catch(err=>console.log(err))
    return request
  }

  const submit = async (file) => {
    setLoading(false);
    let formdata = new FormData();
    console.log(file.name);
    formdata.append("zip_file", file);
    const endpoint = "http://3.110.154.99:8004/process_images";
    // const endpoint = "http://192.168.123.161:80/api/file/upload";
    toast.promise(
      Request(endpoint,formdata),
      {
        pending: 'File Processing',
        success: 'File Processed Successfully',
        error: 'Failed Processing File'
      }
    )
  };
  //----------------------------------------------

  return loading ? (
    <div className="w-full h-screen flex justify-center items-center">
      <span className="animate-pulse font-Poppins font-bold text-2xl">Loading</span>
      <span className="animate-pulse mx-1 text-blue-500 duration-300 text-2xl font-bold">.</span>
      <span className="animate-pulse mx-1 text-green-500 text-2xl font-bold">.</span>
      <span className="animate-pulse mx-1 text-red-500 text-2xl font-bold">.</span>
    </div>
  ) : (
    <div className="w-full max-h-screen bg-green-50">
      <div className="flex items-center justify-between w-full h-1/6 z-0">
        <UploadFile
          dataArray={dataArray}
          handleDataFromChild={handleDataFromChild}
        />
        <div>
          <button
            onClick={setList}
            className={`my-2 mx-1 px-4 py-1 rounded ${theme.list}  `}
          >
            List
          </button>
          <button
            onClick={setGrid}
            className={`my-2 mx-1 px-4 py-1 rounded ${theme.grid} `}
          >
            Grid
          </button>
        </div>
      </div>
      <div className="h-5/6 z-20">
        {view === "grid" ? (
          <div className="grid grid-cols-3 md:grid-cols-4 max-h-full px-4 overflow-y-auto gap-1">
            {dataArray.map((file, index) => (
              <GridBox key={index} file={file} submit={submit} />
            ))}
          </div>
        ) : (
          <div className="flex items-start max-h-full flex-col">
            {
              <ul className="w-full p-4 max-h-full overflow-y-auto">
                {dataArray.map((file, index) => (
                  <li
                    key={index}
                    className="bg-white flex justify-between shadow-sm border border-solid border-Green border-opacity-40 text-xs h-12 items-center my-2 px-4 w-full rounded-lg"
                  >
                    <span className="font-semibold">
                      {file.name}
                      <span className="px-2 font-normal">
                        {file.size / 1000000 < 1
                          ? Math.round(file.size / 1000) + "KB"
                          : Math.round(file.size / 1000000) + "MB"}
                      </span>
                    </span>
                    <button
                      onClick={() => submit(file)}
                      className="bg-Green p-2 rounded text-white border-black bg-opacity-90"
                    >
                      process
                    </button>
                  </li>
                ))}
              </ul>
            }
          </div>
        )}
        <ToastContainer/>
      </div>
    </div>
  );
};

export default Views;
