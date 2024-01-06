import { useState } from "react";
import { UserContext } from "./Context";


// eslint-disable-next-line react/prop-types
const UserProvider = ({children}) => {
    const [name,setName] = useState("")

    const value = {
        name,
        setName
    }
  return (
    <UserContext.Provider value={value}>{children}</UserContext.Provider>
  )
}

export default UserProvider