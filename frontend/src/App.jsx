import './App.css'
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  createRoutesFromElements
} from "react-router-dom";


//layouts
import RootLayout from './Layouts/RootLayout';

//pages
import SignUp from './Pages/SignUp';
import Login, { loginUser } from './Pages/Login';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />} >
      <Route path='signup' element={<SignUp />} />
      <Route path='login' element={<Login />} action={loginUser}/>
    </Route>
  )
)


function App() {

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
