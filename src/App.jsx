import React from 'react'
import Home from './Components/Homepage/Home'
import Nav from './Components/section1/Nav'
import { Route, Routes } from 'react-router-dom'
import Menu from './Components/Menu/Menu'
import Page404 from './Components/404Page/Page404'
import Searchpage from './Components/searchBar/Searchpage'
import Footer from './Components/footer/Footer'
import Urus from './Components/urus/Urus'
import Lenis from 'lenis'

const App = () => {
    // smooth scrolling 
    // Initialize Lenis
  const lenis = new Lenis();

  // Use requestAnimationFrame to continuously update the scroll
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
  
  return (
    <div className='relative flex flex-col bg-black [max-w-[1400px]'>
      <Nav  />
      <Routes >
        <Route path='/' element={<Home />}/>
        <Route path='/Menu' element={<Menu />} />
        <Route path='*' element={<Page404 />} />
        <Route path='/Search' element={<Searchpage />} />
        <Route path='/Urus' element={<Urus />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
