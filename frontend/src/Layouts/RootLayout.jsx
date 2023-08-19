import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

export default function RootLayout() {
  return (
    <>
    <header>
      <nav>
          <Navbar />
      </nav>
    </header>

    <main>
      <Outlet />
    </main>
    </>
  )
}
