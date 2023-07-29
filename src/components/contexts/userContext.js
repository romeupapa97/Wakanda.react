import { createContext, useEffect, useState } from "react";

export const userContext=createContext();
export const UserStore=({children})=>{
  const [login, setLogin] = useState(false)
  const [data, setData]=useState({})
  useEffect(()=>{
    setData({nome:'Romeu', age:25})
  },[])
  return (
    <userContext.Provider value={{login, setLogin}}>
      {children}
            
    </userContext.Provider>
  )
}
