import { useState } from "react";
import LoginImg from "../assets/Images/Secure.gif";
import { useImmer } from "use-immer";
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types'

const Login = ({adminData}) => {
  const navigate = useNavigate()
  const [admin, setAdmin] = useState("bg-white text-Green rounded-t-lg rounded-tr-lg");
  const [user, setUser] = useState("bg-Green text-white rounded-bl-lg");
  const [person,setPerson] = useState('admin')
  const [adminLogin,setAdminLogin] = useImmer({
    username:'',
    email:'',
    password:''
  })
  const [userLogin,setUserLogin] = useImmer({ 
    username:'',
    email:'',
    password:''
  })
  const handleAdminChange = (e) =>{
    const {name,value} = e.target
    setAdminLogin(draft=>{
      draft[name] = value
    })
  }
  const handleUserChange = (e) =>{
    const {name,value} = e.target
    setUserLogin(draft=>{
      draft[name] = value
    })
  }
  const handleSubmit = (e) =>{
    e.preventDefault()
    if(person === 'admin' ) 
    {
      if(adminLogin.email === adminData.email && adminLogin.username === adminData.username && adminLogin.password === adminData.password){
        navigate('/admin')
      }
      else{
        alert('Invalid Credentials')
        return
      }
    }
    else{
      alert(JSON.stringify(userLogin))
    }
    setUserLogin(draft=>{
      draft.username = ''
      draft.email = ''
      draft.password = ''
    }) 
    setAdminLogin(draft=>{
      draft.username = ''
      draft.email = ''
      draft.password = ''
    }) 
  }

  const adminhandleClick = () => {
    setAdmin("bg-white text-Green rounded-t-lg rounded-tr-lg");
    setUser("bg-Green text-white rounded-bl-lg");
    setPerson('admin')
    setUserLogin(draft=>{
      draft.username = ''
      draft.email = ''
      draft.password = ''
    })
  };
  const userhandleClick = () => {
    setAdmin("bg-Green text-white rounded-br-lg");
    setUser("bg-white text-Green rounded-t-lg ");
    setPerson('user')
    setAdminLogin(draft=>{
      draft.username = ''
      draft.email = ''
      draft.password = ''
    })
  };
  return (
    <div className="min-h-screen flex flex-col justify-center bg-Green ">
      <div className="text-center bg-Green text-3xl text-white font-semibold">
        RBG.AI
      </div>
      <div className="flex flex-col md:flex-row items-center md:justify-evenly md:px-24 m-2 ">
        <div className="h-full">
          <img src={LoginImg} alt="" className="hidden lg:block" />
        </div>
        <div className="w-full max-w-md bg-blend-saturation bg-white rounded-lg top-0 ">
          <div className="pb-3  bg-Green">
            <h1 className=" text-center tracking-widest text-2xl text-white font-semibold uppercase">
              Login
            </h1>
          </div>
          <div className="flex  w-full justify-evenly bg-Green">
            <div
              className={`w-1/2 flex py-4 items-center justify-center  ${admin}`}
            >
              <button
                onClick={adminhandleClick}
                className={`text-xl font-semibold h-full`}
              >
                Admin
              </button>
            </div>
            <div
              className={`w-1/2 flex py-4 items-center justify-center  ${user}`}
            >
              <button
                onClick={userhandleClick}
                className={`text-xl font-semibold  h-full`}
              >
                User
              </button>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="p-3">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                onChange={person === 'admin' ? handleAdminChange : handleUserChange}
                value={person === 'admin' ? adminLogin.username : userLogin.username}
                className="mt-1 p-2 w-full border rounded-md outline-none"
                placeholder="John"
                required
              />
            </div>
            <div className="p-3">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 p-2 w-full border rounded-md outline-none"
                placeholder="sample@example.com"
                value={person === 'admin' ? adminLogin.email : userLogin.email}
                onChange={person === 'admin' ? handleAdminChange : handleUserChange}
                required
              />
            </div>

            <div className="mb-4 p-3">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-600"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="mt-1 p-2 w-full border rounded-md outline-none"
                placeholder="********"
                value={person === 'admin' ? adminLogin.password : userLogin.password}
                onChange={person === 'admin' ? handleAdminChange : handleUserChange}
                required
              />
            </div>
            <div className="py-2 p-3">
              <button
                type="submit"
                className="w-full bg-Green text-white py-2 rounded-md active:bg-green-600 duration-150"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {
  adminData:PropTypes.object
}

export default Login;
