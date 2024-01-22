import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Home/Footer'
import Start from '../Home/Start'
import Download from './Download'


function AllDownloads() {
  return (
    <div>
        <Navbar/>
       <Start/>
       <Download/>
       <Footer/>
    </div>
  )
}

export default AllDownloads