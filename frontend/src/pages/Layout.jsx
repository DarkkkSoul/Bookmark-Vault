import React from 'react'
import { Outlet } from 'react-router'
import Header from './body/Header'
import Footer from './body/Footer'

function Layout() {
  return (
      <>
         <Header/>
         <Outlet/>
         <Footer/>
      </>
  )
}

export default Layout