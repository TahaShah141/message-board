import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

export default function RootLayout() {
  return (
    <>
    <nav>
        <Navbar />
    </nav>

    <Outlet />
    </>
  )
}
