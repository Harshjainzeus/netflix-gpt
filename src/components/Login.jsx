import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from "./common/Header"
import LoginForm from "./LoginForm"


const Login = () => {

  return (
    <div className='w-full h-screen'>
      <Header/>
      <LoginForm/>
    {/* <Outlet/> */}
    </div>
  )
}

export default Login