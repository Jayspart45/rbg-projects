import { useDropzone } from "react-dropzone";
import { useCallback, useState } from "react";
import { FaFileZipper } from "react-icons/fa6";
import PropTypes from "prop-types";

const Fileupload = ({dataArray,onDataFromChild }) => {
  const [acceptedFiles, setAcceptedFiles] = useState(dataArray);
  const onDrop = useCallback(
    (files) => {
      const zipFiles = files.filter(
        (file) =>
          file.type === "application/zip" &&
          !dataArray.find((existingFile) => existingFile.name === file.name)
      );
      setAcceptedFiles((prevFiles) => [...prevFiles, ...zipFiles]);
      console.log("Accepted Files:", [...acceptedFiles, ...zipFiles]);
    },
    [acceptedFiles,dataArray]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: ".jpg",
  });

  onDataFromChild(acceptedFiles);
  return (
    <div {...getRootProps()}>
      <div className="w-fit max-md:w-2/3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white m-5 z-10 text">
        <div
          htmlFor="dropzone-file"
          className="flex h-64 p-6
           w-full cursor-pointer flex-col items-center justify-center rounded-lg border-slate-800 shadow border border-dashed"
        >
          <div className="flex flex-col items-center justify-center pb-6 pt-5">
            <FaFileZipper size={25} />
            <p className="mb-2 text-sm text-center text-black">
              <span className="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p className="text-xs text-black">only .zip files</p>
            <input id="dropzone-file" {...getInputProps()} className="hidden" />
          </div>
        </div>
      </div>
    </div>
  );
};

Fileupload.propTypes = {
  dataArray: PropTypes.array,
  onDataFromChild: PropTypes.func,
}
export default Fileupload;
