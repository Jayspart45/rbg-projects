import { NavLink, useLocation, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import ls from "../Utility";

function CgProfile(props) {
  return (
    <svg
      stroke="currentColor"
      fill="none"
      strokeWidth={0}
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 9C16 11.2091 14.2091 13 12 13C9.79086 13 8 11.2091 8 9C8 6.79086 9.79086 5 12 5C14.2091 5 16 6.79086 16 9ZM14 9C14 10.1046 13.1046 11 12 11C10.8954 11 10 10.1046 10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM3 12C3 14.0902 3.71255 16.014 4.90798 17.5417C6.55245 15.3889 9.14627 14 12.0645 14C14.9448 14 17.5092 15.3531 19.1565 17.4583C20.313 15.9443 21 14.0524 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12ZM12 21C9.84977 21 7.87565 20.2459 6.32767 18.9878C7.59352 17.1812 9.69106 16 12.0645 16C14.4084 16 16.4833 17.1521 17.7538 18.9209C16.1939 20.2191 14.1881 21 12 21Z"
        fill="currentColor"
      />
    </svg>
  );
}

const Sidebar = ({ showMenu, onClick }) => {
  const navigate = useNavigate();
  let path = useLocation();
  path = path.pathname.split("/")[2];
  let active;
  if (path === "upload" || path === "" || !path) {
    active = {
      upload: "bg-slate-100 bg-opacity-30 ",
      dashboard: "",
      output: "",
    };
  } else {
    if (path === "output")
      active = {
        upload: "",
        dashboard: "",
        output: "bg-slate-100 bg-opacity-30 ",
      };
    else {
      active = {
        upload: "",
        dashboard: "bg-slate-100 bg-opacity-30 ",
        output: "",
      };
    }
  }
  const Logout = () => {
    ls.clear("user_name");
    ls.clear("id");
    navigate("/");
  };
  return (
    <div
      className={
        `font-Poppins h-screen w-1/2 z-20 md:left-0 md:w-1/5 lg:1/6 flex max-md:absolute md:flex flex-col justify-between bg-Green text-white transition-all duration-300  ease-in` +
        (showMenu ? " left-0" : " -left-full")
      }
    >
      <div className="m-0 p-0 w-full">
        <div className="md:text-center px-5 py-4">Logo</div>
        <nav className="w-full border-0 border-t border-white">
          <NavLink
            to="/user/upload"
            onClick={onClick}
            className={`block m-1 active:bg-slate-100 active:bg-opacity-30 rounded text-center px-5 py-3 ${active.upload}`}
          >
            Upload File
          </NavLink>

          <NavLink
            to="/user/dashboard"
            onClick={onClick}
            className={`block m-1 active:bg-slate-100 active:bg-opacity-30 rounded text-center px-5 py-3 ${active.dashboard}`}
          >
            Dashboard
          </NavLink>
        </nav>
      </div>
      <div className="mb-4">
        <div className="flex items-center justify-center gap-2 w-full p-2">
          <CgProfile className="block h-6 w-6" />
          <span className="block">{name}</span>
        </div>
        <div
          onClick={Logout}
          className="flex cursor-pointer items-center justify-center w-full p-2"
        >
          Logout
        </div>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  showMenu: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Sidebar;
