import { useState } from "react"
import Sidebar from "./Sidebar"
import Menu from "./Menu"
import ManageUser from "./ManageUser"
import { Outlet } from "react-router-dom"
const Admin = () =>{
  const [showMenu,setShowMenu] = useState(false)
  const onClick = () =>{
    setShowMenu(!showMenu)
    console.log(showMenu)
  }
  return (
    <div className="flex flex-col md:flex-row">
        <Menu onClick={onClick}/>
        <Sidebar showMenu={showMenu} onClick={onClick}/>
        <div className="w-full h-screen">
            <Outlet/>
        </div>
    </div>
  )
}

export {Admin,ManageUser}