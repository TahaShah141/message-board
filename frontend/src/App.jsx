import './App.css'
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";

//layouts
import RootLayout from './Layouts/RootLayout';

//pages
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import Authenticator from './Components/Authenticator';
import Authentication from './Components/Authentication';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />} >

      <Route element={<Authenticator />} >
        <Route index element={<p>This is the home page</p>} />
        <Route path='messages' element={<p>This is the messages page</p>} />
        <Route path='profile' element={<p>This is the profile page</p>} />
      </Route>

      <Route element={<Authentication />}>
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<SignUp />} />
      </Route>
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
