import { useState } from "react"
import Sidebar from "./Sidebar"
import Output from "./Output"
import Menu from "./Menu"
import Views from "./Views"
import { Outlet } from "react-router-dom"
const User = () =>{
  const [showMenu,setShowMenu] = useState(false)
  const onClick = () =>{
    setShowMenu(!showMenu)
    console.log(showMenu)
  }
  return (
    <div className="flex flex-col md:flex-row">
        <Menu onClick={onClick}/>
        <Sidebar showMenu={showMenu} onClick={onClick}/>
        <Outlet/>
    </div>
  )
}

export {User,Views,Output}