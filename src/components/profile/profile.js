import React, { useContext } from "react";
import { userContext } from "../contexts/userContext";
function Profile(){
  const {login}=useContext(userContext)
  return (
    <div>
      {login ? 'User data': 'Make your login so that you can have access to informations'}
     
    </div>
  )
}
export default Profile