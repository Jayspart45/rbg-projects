import { useEffect, useState } from "react";
import { FaDownload } from "react-icons/fa6";
import axios from "axios";
import ls from "../Utility";

const Output = () => {
  const [outputs, setOutputs] = useState(ls.get("outputs") || []);
  const [search, setSearch] = useState("");
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const id = ls.get('user_id')
  useEffect(() => {
    const get_outputs = async () => {
      try {
        let endpoint = `http://3.110.154.99:8004/outputs/${id}`;
        const response = await axios.get(endpoint);
        // console.log(response)
        if (response.status == 200) {
          // console.log(response.data)
          ls.save("outputs", response.data);
          setOutputs(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    get_outputs();
  }, []);
  useEffect(() => {
    if (search === "") {
      setOutputs(ls.get("outputs") || []);
    } else {
      setOutputs(
        outputs.filter((output) => {
          if (output.toLowerCase().includes(search.toLowerCase()))
            return output;
        })
      );
    }
  }, [search]);
  return (
    <div className="w-full h-screen bg-green-50">
      <div className="h-fit w-full">
        <div className="flex justify-between max-md:flex-col items-center px-4 py-2">
          <div className="text-xl font-semibold">Output files</div>
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={handleChange}
              className="border border-solid border-Green border-opacity-40 rounded-lg px-4 py-1 outline-none"
            />
          </div>
        </div>
      </div>
      <div className="h-5/6">
        <ul className="p-4 max-h-full overflow-y-auto w-full">
          {outputs.length === 0 ? (
            <div className="text-center text-xl font-semibold">
              No Files Found
            </div>
          ) : (
            outputs.map((output, index) => {
              return (
                <li
                  key={index}
                  className="bg-white flex justify-between shadow-sm border border-solid border-Green border-opacity-40 text-xs h-12 items-center my-2 px-4 w-full rounded-lg"
                >
                  <span>{output.outputfile.split('/')[1]}</span>
                  <a
                    className="border-Green border border-solid border-opacity-50 bg-opacity-80 cursor-pointer flex items-center font-semibold px-4 py-1 rounded-lg text-Green active:text-white active:bg-Green duration-75"
                    href={output.outputfile}
                    download={true}
                  >
                    <FaDownload size={15} />
                  </a>
                </li>
              );
            })
          )}
        </ul>
      </div>
    </div>
  );
};

export default Output;
