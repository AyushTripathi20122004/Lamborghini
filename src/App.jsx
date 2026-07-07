import React from 'react'
import Home from './Components/Homepage/Home'
import Nav from './Components/section1/Nav'
import { Route, Routes } from 'react-router-dom'
import Menu from './Components/Menu/Menu'
import Page404 from './Components/404Page/Page404'
import Searchpage from './Components/searchBar/Searchpage'
import Footer from './Components/footer/Footer'

const App = () => {
  return (
    <div className='relative [max-w-[1400px]'>
      <Nav  />
      <Routes >
        <Route index element={<Home />}/>
        <Route path='/Menu' element={<Menu />} />
        <Route path='*' element={<Page404 />} />
        <Route path='/Search' element={<Searchpage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
