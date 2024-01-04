import { useState } from "react";
import { TbFileImport } from "react-icons/tb";
import Fileupload from "./Fileupload";
import PropTypes from "prop-types";
const Dashboard = ({dataArray,handleDataFromChild}) => {
  const [toggle, setToogle] = useState(true);
  
  const handleToogle = () => {
    setToogle(!toggle);
  };

  let state = toggle ? "hidden" : "";
  return (
    <div className="m-4 h-full p-2 bg-green-50" onClick={handleToogle}>
      <div className="cursor-pointer bg-slate-50 p-4 h-full border-dashed border-slate-900 border-2 border-opacity-40 w-fit">
        <div className="flex items-center flex-col">
          <TbFileImport size={26} className="text-slate-600" />
          <p className="font-medium text-slate-600">import files</p>
        </div>
      </div>
      <div className={`${state} flex justify-center `}>
        <Fileupload dataArray={dataArray} onDataFromChild={handleDataFromChild} />
      </div>
      {/* {dataArray.map((dat) => {
        return (
          <p key={dat.path}>
            {dat.name}
            <span className="px-3"></span>
            {Math.round(dat.size / 1000000)}
            MB
          </p>
        );
      })} */}
    </div>
  );
};
Dashboard.propTypes = {
  dataArray:PropTypes.array,
  handleDataFromChild:PropTypes.func
}

export default Dashboard;
