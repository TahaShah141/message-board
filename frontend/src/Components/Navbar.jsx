import { NavLink } from "react-router-dom";
import { useAuthContext } from "../Hooks/useAuthContext";
import { useState } from "react";

export default function Navbar() {

  const { user, dispatch } = useAuthContext()

  const [isOpen, setOpen] = useState(false)

  return (
    <>
    <div className="hidden justify-between items-center p-7 bg-primary text-white md:px-10 sm:flex border-b-2 border-black">
        <h1 className="text-2xl font-bold md:text-5xl">Board<span className="text-red-500 inline-block -rotate-12 translate-x-1 -translate-y-1">em</span></h1>
        {user && (<div className="flex gap-4 text-lg md:gap-9 md:text-xl">
        <NavLink className="nav-link" to="/">Home</NavLink>
        <NavLink className="nav-link" to="/messages">Messages</NavLink>
        <NavLink className="nav-link" to="/profile">Profile</NavLink>
        <button className="font-mono border-2 border-white p-2 text-sm rounded-md bg-neutral-700 hover:scale-110 hover:font-bold hover:border-black hover:bg-red-500" onClick={() => dispatch({type: 'LOGOUT'})}>Log Out</button>
        </div>)}

        {!user && (<div className="flex gap-4 text-lg md:gap-9 md:text-xl">
        <NavLink className="nav-link" to="/signup">Sign Up</NavLink>
        <NavLink className="nav-link" to="/login">Login</NavLink>
        </div>)}
    </div>

    <div className="relative flex justify-between items-center p-7 bg-primary text-white md:px-10 sm:hidden border-b-2 border-black">
        <h1 className="text-2xl font-bold md:text-5xl">Board<span className="text-red-500 inline-block -rotate-12 translate-x-1 -translate-y-1">em</span></h1>
        <button onClick={() => setOpen(!isOpen)}className="text-white w-10 h-10"><svg className=" w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" fill="currentColor"/></svg></button>
        {isOpen && (
        <>
          {user && (<div className="absolute bg-primary top-full left-[5%] w-[90%] my-4 rounded-3xl border-4 border-neutral-900 p-3 text-lg flex flex-col items-center gap-4 animate-popup">
          <NavLink className="nav-link" onClick={() => setOpen(false)} to="/">Home</NavLink>
          <NavLink className="nav-link" onClick={() => setOpen(false)} to="/messages">Messages</NavLink>
          <NavLink className="nav-link" onClick={() => setOpen(false)} to="/profile">Profile</NavLink>
          <button className="font-mono border-2 border-white p-2 text-sm rounded-md bg-neutral-700 hover:scale-110 hover:font-bold hover:border-black hover:bg-red-500" onClick={() => dispatch({type: 'LOGOUT'})}>Log Out</button>
          </div>)}

          {!user && (<div className="absolute bg-primary top-full left-[5%] w-[90%] my-4 rounded-3xl border-4 border-neutral-900 p-3 text-lg flex flex-col items-center gap-4 animate-popup">
          <NavLink className="nav-link" onClick={() => setOpen(false)} to="/signup">Sign Up</NavLink>
          <NavLink className="nav-link" onClick={() => setOpen(false)} to="/login">Login</NavLink>
          </div>)}
        </>
        )}
    </div>
    </>
  )
}
