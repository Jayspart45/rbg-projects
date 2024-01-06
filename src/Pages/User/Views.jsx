import { useEffect } from "react";
import { useState } from "react";
import GridBox from "./GridBox";
import Dashboard from "./Dashboard";
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

  const submit = async (file) => {
    let formdata = new FormData();
    console.log(file.name);
    formdata.append("zip_file", file);
    // formdata.append("file_name", file.name);
    const endpoint = "http://3.110.154.99:8003/process_images";
    try {
      const response = await axios.post(endpoint, formdata, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  //----------------------------------------------

  return (
    <div className="w-full max-h-screen bg-green-50">
      <div className="flex items-center justify-between w-full h-1/6 z-0">
        <Dashboard
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
      </div>
    </div>
  );
};

export default Views;
