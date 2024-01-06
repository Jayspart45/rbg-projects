import PropTypes from "prop-types";
const GridBox = ({ file, submit }) => {
  return (
    <div className="h-44 w-40 bg-white p-5 rounded border border-solid border-Green flex items-center justify-center border-opacity-30 shadow text-xs m-2 ">
      <div className="">
        <div>
          <span className=" text-xs">
            Name:{" "}
            <span className="font-semibold">
              {file.name.length > 10 ? file.name.slice(0, 10) +'...': file.name}
            </span>
          </span>
          <br />
          <span>
            Size:
            <span className="font-semibold">
              {file.size / 1000000 < 1
                ? Math.round(file.size / 1000) + "KB"
                : Math.round(file.size / 1000000) + "MB"}
            </span>
          </span>
        </div>
        <button
          onClick={() => submit(file)}
          className="bg-Green w-fit p-1 my-1 rounded text-white border-black bg-opacity-90"
        >
          process
        </button>
      </div>
    </div>
  );
};

GridBox.propTypes = {
  file: PropTypes.object,
  submit: PropTypes.func,
};

export default GridBox;
