"use client"

import { createContext, useContext, useState, ReactNode, useEffect } from "react"
import Cookies from 'js-cookie';

type UserContextType = {
  user: User | undefined
  setUser: React.Dispatch<React.SetStateAction<User|undefined>>
}


export interface User{
    username :string 
    email : string 
    id : string
    isAuthenticated:boolean
}

const UserContext = createContext<UserContextType | null>(null)

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | undefined>(undefined)

  const getUserInfo = async () => {
  try {
    const res = await fetch("/api/user", {
      credentials: "include",
    })

    if (!res.ok) return null

    const data = await res.json()
    return data
  } catch {
    return null
  }
}

const getUser = async (isAuthenticated:boolean)=>{
    if(isAuthenticated){
      const userInfo = await getUserInfo();
      console.log("user Info : ",userInfo)
      setUser((prev:User | undefined)=>({
        username : userInfo?.username ?? '',
        id : userInfo?.id  ?? '' ,
        isAuthenticated : isAuthenticated,
        email : ''
      }))
    }else{
      
      setUser(undefined);
    }
}

  useEffect(()=>{
    getUser(user?.isAuthenticated ?? false);
  },[user?.isAuthenticated])

  const checkUser =async ()=>{
    console.log("call this authomaticly ...");
    // const cookieStore = await cookies();
    // const myCookie = cookieStore.get('sb-mliqtqgjzmqioeklvclc-auth-token')
    const userToken = Cookies.get('sb-mliqtqgjzmqioeklvclc-auth-token');
    console.log("myCookie : ",userToken);
    getUser(userToken ? true : false);
  }
  useEffect(()=>{
    checkUser();
  },[])

  useEffect(()=>{
    console.log("user ==>%%",user);
  },[user])
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}

export function useUser() {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error("useUser must be used inside UserProvider")
  }
  return context;
}
