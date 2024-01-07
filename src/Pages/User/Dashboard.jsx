// import { Outlet } from "react-router-dom"

let uploaded =5
let success =3
let error =2

const Dashboard = () => {
  return (
    <div className="w-full h-screen bg-green-50 flex items-center justify-center">
        <div className="w-5/6 h-5/6 bg-white border border-solid border-black border-opacity-20 shadow">
            <div className="w-full flex items-center justify-around border-0 border-b border-solid border-black">
                <button className="bg-white py-1 px-2 rounded m-2">Files Uploaded:{uploaded}</button>
                <button className="bg-white py-1 px-2 rounded m-2">Success Files:{success}</button>
                <button className="bg-white py-1 px-2 rounded m-2">Error Files:{error}</button>
            </div>
            {/* <Outlet/> */}
            <div className="w-full bg-red-300 ">
                <span className="w-1/3 h-fit">time</span>
                <span className="w-1/3 h-fit">time</span>
                <span className="w-1/3 h-fit">time</span>
            </div>
        </div>
    </div>
  )
}

export default Dashboard