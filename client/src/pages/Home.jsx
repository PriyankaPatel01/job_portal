import React from 'react'
import Navbar from '../components/Navbar'
import High from '../components/High'
import JobListing from '../components/JobListing'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <High/>
      <JobListing/>
      <Footer/>
    </div>
  )
}

export default Home
