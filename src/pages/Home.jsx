import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Slider from '../components/Home/slider/Slider'
import Services from '../components/Home/services/Services'
import Footer from '../components/Home/footer/Footer'
import Projects from '../components/Home/projects/Projects'
import Abou from '../components/Home/aboutus/Abou'
const Home = () => {
  return (
    <div style={{backgroundColor:'#f1f1f1'}}>
      <Navbar />
      <Slider/>
      <Projects/>
      <Abou/>
      <Services />
      <Footer/>
    </div>
  )
}

export default Home