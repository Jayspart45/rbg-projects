/* eslint-disable react/prop-types */

import axios from "axios";
import pdficon from "../../assets/Images/pdf.png";
// import log from "../../assets/Images/log.png";
export const Image = ({ src }) => {
  return <img src={src} alt="icon" className="w-6 mr-2" />;
};

const Filelist = ({ item }) => {
  // const { isLoading } = useContext(FileContext);
  const getFile = async (folder_path) => {
    try {
      const response = await axios.get(
        `http://13.201.163.31:8004/download-zip?folder_path=${folder_path}`,
        {
          responseType: "arraybuffer", // Set responseType to 'arraybuffer' to receive binary data
        }
      );
      console.log(response);
      // Create a Blob with the binary data
      const blob = new Blob([response.data], { type: "application/zip" });

      const downloadLink = document.createElement("a");
      downloadLink.href = window.URL.createObjectURL(blob);
      downloadLink.download = `${folder_path}`;

      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(item);

  return item ? (
    <div className="w-full text-center grid grid-cols-6  font-Poppins text-sm  border-b border-gray-300">
      <div className="flex gap-2 items-center justify-center py-2">
        <div>
          <p>{item.timestamp.split("T")[0]}</p>
          <p>{new Date(`${item.timestamp}Z`).toLocaleTimeString()}</p>
        </div>
      </div>
      <div className="flex gap-2 items-center justify-center py-2">
        <div>
          <p>{item.reqid}</p>
        </div>
      </div>
      {console.log(item.map_dict)}
      <div className="col-span-4">
        {item.map_dict.map((data, index) => (
          <div key={index} className="grid grid-cols-4 ">
            {data.status_code == 200 ? (
              <>
                <div className="flex flex-col">
                  <div
                    onClick={() =>
                      getFile(
                        `${item.output_folder}/${data.barcode}/${data.barcode}.pdf`
                      )
                    }
                    className="flex gap-2 items-center text-yellow-600 cursor-pointer font-medium justify-center py-2"
                  >
                    {console.log(data)}
                    <Image src={pdficon} />
                    {data.barcode}.pdf
                  </div>
                </div>
                <div className="flex flex-col">
                  <div
                    onClick={() =>
                      getFile(
                        `${item.output_folder}/${data.barcode}/${data.barcode}_masked.pdf`
                      )
                    }
                    className="flex gap-2 items-center text-yellow-600 cursor-pointer font-medium justify-center py-2"
                  >
                    <Image src={pdficon} />
                    {data.barcode}_masked.pdf
                  </div>
                </div>
                <div className="flex flex-col">
                  <div
                    className={`flex gap-2 items-center cursor-pointer font-medium justify-center py-2 
                      text-green-500`}
                  >
                    {data.status_code}
                  </div>
                </div>
                <div>-</div>
              </>
            ) : (
              <>
                <div>-</div>
                <div>-</div>
                <div className="text-red-500  font-medium py-2">
                  {data.status_code}
                </div>
                <div className="flex flex-col">
                  <div
                    onClick={() =>
                      getFile(
                        `${item.output_folder}/${data.barcode}/${data.barcode}.zip`
                      )
                    }
                    className="flex gap-2 items-center text-red-600 cursor-pointer font-medium justify-center py-2"
                  >
                    {data.barcode}.zip
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      {/* <div className="flex flex-col">
        {item.bar_code ? (
          item.bar_code.map((pdf, index) => (
            <div
              key={index}
              onClick={() =>
                getFile(`${item.output_folder}\\${pdf}\\${pdf}.log`)
              }
              className="flex gap-2 items-center text-yellow-600 cursor-pointer font-medium justify-center py-2"
            >
              <Image src={log} />
              {pdf}.log
            </div>
          ))
        ) : (
          <></>
        )}
      </div> */}

      {/* 
      <div className="flex items-center justify-center">
        <div className="flex gap-2 items-center justify-center py-2">
          <div className="text-green-600">Success {item.timestamp}</div>
          <button
            onClick={() => {
              getFile(item.output_folder);
              console.log(item.output_folder);
            }}
            className="cursor-pointer flex items-center font-semibold px-4 py-1 rounded-lg text-blue-400 active:text-zinc-900  duration-75"
          >
            Get file
            <FaDownload className="mx-2 text-sm" />
          </button>
        </div>
      </div> */}
    </div>
  ) : (
    <></>
  );
};

export default Filelist;
