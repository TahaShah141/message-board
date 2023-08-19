import { NavLink } from "react-router-dom";
import { useAuthContext } from "../Hooks/useAuthContext";

export default function Navbar() {

  const { user, dispatch} = useAuthContext()

  return (
    <div className="flex justify-between items-center p-5 bg-primary text-white md:px-10">
        <h1 className="text-2xl font-bold md:text-5xl">Board<span className="text-red-500 inline-block -rotate-12 translate-x-1 -translate-y-1">em</span></h1>
        {user && (<div className="flex gap-4 text-lg md:gap-9 md:text-xl">
        <NavLink className="nav-link" to="/home">Home</NavLink>
        <NavLink className="nav-link" to="/messages">Messages</NavLink>
        <NavLink className="nav-link" to="/profile">Profile</NavLink>
        <button className="font-mono border-2 border-white p-2 text-sm rounded-md bg-neutral-700 hover:scale-110 hover:font-bold hover:border-black hover:bg-red-500" onClick={() => dispatch({type: 'LOGOUT'})}>Log Out</button>
        </div>)}

        {!user && (<div className="flex gap-4 text-lg md:gap-9 md:text-xl">
        <NavLink className="nav-link" to="/signup">Sign Up</NavLink>
        <NavLink className="nav-link" to="/login">Login</NavLink>
        </div>)}
    </div>
  )
}
