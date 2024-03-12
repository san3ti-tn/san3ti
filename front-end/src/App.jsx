import React from 'react';
import SignUp from './Login&SignUp/SignUp';
import Login from './Login&SignUp/Login';

import { createBrowserRouter ,RouterProvider } from "react-router-dom"

function App() {

const router = createBrowserRouter([
  
  {
  path : "/" ,
  element : <SignUp/>
},

{
  path :"/login",
  element : <Login/>
}

])
  return (
   <RouterProvider router={router}/>
  );
}

export default App;