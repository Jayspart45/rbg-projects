import { useState } from "react"
import Sidebar from "./Sidebar"
import Views from "./Views"
import Menu from "./Menu"
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
        <Views/>
    </div>
  )
}

export default User