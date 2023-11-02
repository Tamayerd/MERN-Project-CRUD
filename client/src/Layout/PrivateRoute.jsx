import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const  PrivateRoute = () => {
  let auth = {'token': true}
  
  return (
   
      auth.token ? <Outlet></Outlet> : <Navigate to="/"></Navigate>
 
  );
}

export default PrivateRoute