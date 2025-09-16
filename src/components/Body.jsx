import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './common/Header'

const Body = () => {
  return (
    <div>
      <Header/>
      <Outlet/>
    </div>
  )
}

export default Body