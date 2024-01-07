import { FaClock } from "react-icons/fa";
import zip from "../../assets/Images/zip.png";
import check from "../../assets/Images/checked.png";
import { RiErrorWarningLine } from "react-icons/ri";
const Filelist = ({ sucess, error }) => {
  return (
    <div className="w-full flex justify-between font-Poppins text-sm md:space-y-3 px-3 py-3 lg:px-24 border-b border-gray-300">
      <div className="flex justify-between w-full ">
        <div className="flex md:space-x-3 md:pr-2">
          <div className="flex px-1 ">
            <img src={zip} className="h-5" />
          </div>
          <div className="flex flex-col md:flex-row justify-center space-x-2">
            <p className="text-[15px] font-medium">Test.zip</p>
            <p className="text-[10px]">40MB</p>
          </div>
        </div>
        <div className="flex">
          <FaClock size={19} className="hidden md:block" />
          <p className="px-2 text-[10px] md:text-sm font-medium">
            12:20pm,12/03/2032
          </p>
          <img src={check} className={`h-5 md:px-3 ${sucess} `} />
          <div className="md:px-3">
            <RiErrorWarningLine size={22} className={`text-red-600 ${error}`} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filelist;
