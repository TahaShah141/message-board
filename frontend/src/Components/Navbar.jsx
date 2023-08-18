import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
        <h1>Board<span>em</span></h1>

        <Link to="/">Home</Link>
        <Link to="/">Messages</Link>
        <Link to="/">Profile</Link>
    </div>
  )
}
