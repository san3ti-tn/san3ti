import React from 'react';
import SignUp from './Login&SignUp/SignUp';
import Login from './Login&SignUp/Login';
import Create from './Createprofession/Create';
import Home from './Home';
import Allprofessions from './Professions/Allprofessions';
import Porfessiondetail from './Professions/Porfessiondetail';
import { createBrowserRouter ,RouterProvider } from "react-router-dom"
function App() {
const router = createBrowserRouter([
  {
  path : "/signup" ,
  element : <SignUp/>
},
{
  path : "/Login" ,
  element : <Login/>
},

{
  path :"/",
  element : <Login/>
},
{
  path : "/home" ,
  element : <Home/>
},

{
  path:"/create",
  element : <Create/>
},
{
  path:"/professions" ,
  element : <Allprofessions/>
},
{
 path : "/detail/:id" , 
 element : <Porfessiondetail/>
}
])
  return (
   <RouterProvider router={router}/>
  )
}
export default App;