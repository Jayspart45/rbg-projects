import { FaClock } from "react-icons/fa";
import zip from "../../assets/Images/zip.png";
import check from "../../assets/Images/checked.png";
import { RiErrorWarningLine } from "react-icons/ri";
const Filelist = ({ sucess, error }) => {
  return (
    <div className="w-3/4 flex justify-between font-Poppins text-sm space-y-3 p-5">
      <div className="flex justify-between w-full ">
        <div className="flex space-x-3">
          <div className="flex ">
            <img src={zip} className="h-5" />
          </div>
          <div className="flex flex-row justify-center space-x-2">
            <p className="text-[15px] font-medium">Test.zip</p>
            <p className="text-[10px]">40MB</p>
          </div>
        </div>
        <div className="flex">
          <FaClock size={19} />
          <p className="px-2">12:20pm,12/03/2032</p>
          <img src={check} className={`h-5 px-6 ${sucess} `} />
          <div>
            <RiErrorWarningLine size={22} className={`text-red-600 ${error}`} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filelist;
