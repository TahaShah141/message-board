import './App.css'
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  createRoutesFromElements,
  Navigate
} from "react-router-dom";

//layouts
import RootLayout from './Layouts/RootLayout';

//pages
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import { useAuthContext } from './Hooks/useAuthContext';

const authrouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />} >
      <Route path='signup' element={<SignUp />} />
      <Route path='login' element={<Login />}/>

      <Route path='*' element={<Navigate to="/login"/>} />
    </Route>
  )
  )

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />} >
      <Route path='home' element={<p>This is the home page</p>} />
      <Route path='messages' element={<p>This is the messages page</p>} />
      <Route path='profile' element={<p>This is the profile page</p>} />

      <Route path='*' element={<Navigate to="/home"/>} />
    </Route>
  )
)

function App() {

  const { user } = useAuthContext()

  return (
    <>
      <RouterProvider router={user ? router : authrouter} />
    </>
  )
}

export default App
