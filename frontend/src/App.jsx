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
import Login from './Pages/Login';
import { AuthContextProvider } from './Contexts/authContext';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />} >
      <Route path='signup' element={<SignUp />} />
      <Route path='login' element={<Login />}/>
    </Route>
  )
)


function App() {

  return (
    <>
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
    </>
  )
}

export default App
