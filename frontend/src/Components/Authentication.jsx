import { Navigate, Outlet } from "react-router-dom"
import { useAuthContext } from "../Hooks/useAuthContext"

export default function Authenticator() {

    const { user } = useAuthContext()

    return (
        <>
            {!user ? <Outlet /> : <Navigate to='/' />}
        </>
    )
}
