import { useEffect, useState } from "react";
import { FaDownload } from "react-icons/fa6";
import axios from "axios";
import ls from "../Utility";

const Output = () => {
  const [outputs, setOutputs] = useState(ls.get("outputs") || []);
  const [search, setSearch] = useState("");
    // const[url,setUrl] = useState("");
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const id = ls.get("user_id");
  useEffect(() => {
    const get_outputs = async () => {
      try {
        let endpoint = `http://13.201.163.31:8004/outputs/${id}`;
        const response = await axios.get(endpoint);
        // console.log(response)
        if (response.status == 200) {
          console.log(response.data);
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

// const downloadZipFile = async (filePath) => {
//   try {
//     const apiUrl = `http://13.201.163.31:8004/download-zip?folder_path=${encodeURIComponent(filePath)}`;
//     const response = await axios.get(apiUrl);

//     // Log the complete response for debugging
//     console.log('Full Response:', response);

//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }

//     const contentType = response.headers.get('Content-Type');

//     if (contentType && contentType.includes('application/zip')) {
//       const blob = await response.blob();
      
//       // Log the blob for debugging
//       console.log('Blob:', blob);

//       downloadFile(blob, 'downloadedFile.zip');
//     } else {
//       throw new Error('Invalid or missing Content-Type header for the zip file.');
//     }
//   } catch (error) {
//     console.error('Error downloading the file:', error.message);
//   }
// };

// const downloadFile = (blob, fileName) => {
//   const downloadLink = document.createElement('a');
//   downloadLink.href = window.URL.createObjectURL(blob);
//   downloadLink.download = fileName;

//   document.body.appendChild(downloadLink);
//   downloadLink.click();
//   document.body.removeChild(downloadLink);
// };

  const getFile = async (folder_path) => {
          console.log(`http://13.201.163.31:8004/download-zip?folder_path=${folder_path}`);
      
      try{
       const response = await axios.get(`http://13.201.163.31:8004/download-zip?folder_path=${folder_path}`, {
        responseType: 'arraybuffer', // Set responseType to 'arraybuffer' to receive binary data
      });

      // Create a Blob with the binary data
      const blob = new Blob([response.data], { type: 'application/zip' });

    const downloadLink = document.createElement('a');
      downloadLink.href = window.URL.createObjectURL(blob);
      downloadLink.download = `${folder_path.split("/")[1]}`;

      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
      }
      catch(error){
      console.log(error)
      }
  };
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
                  <span>{output.outputfile.split("/")[1]}</span>
                    {/* {url.length>0?
                    <a href={url} download={true}
                      className="border-Green border border-solid border-opacity-50 bg-opacity-80 cursor-pointer flex items-center font-semibold px-4 py-1 rounded-lg text-Green active:text-white active:bg-Green duration-75"
                    >Download
                    <FaDownload size={15} />
                
                </a>:<></>
                    }
                    
                     */}
                  <button
                    onClick={()=>getFile(output.outputfile)}
                    className="border-Green border border-solid border-opacity-50 bg-opacity-80 cursor-pointer flex items-center font-semibold px-4 py-1 rounded-lg text-Green active:text-white active:bg-Green duration-75"
                  >
                      Get file
                  </button>
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
