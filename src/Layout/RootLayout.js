import React from 'react'
import Navbar from '../Components/Pages/LandingPage/Navbar/Navbar'
import Footer from '../Components/Pages/LandingPage/Footer/Footer'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div className='root-layout'>
        <Navbar />
            <main>
                <Outlet />
            </main>
        <Footer />
    </div>
  )
}

export default RootLayout