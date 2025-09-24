import React from 'react'
import Header from './UI/Header'
import Footer from './UI/Footer'
import {Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Pricing from './Pages/Pricing'
import SignUp from './Pages/SignUp'
const App = () => {
  return (
   <>
   <Header/>


<Routes>
<Route path='/' element={<Home/>} />
<Route path='/about' element={<About/>} />
<Route path='/pricing' element={<Pricing/>} />
<Route path='/signup' element={<SignUp/>} />
</Routes>


   <Footer/>

   </>
  )
}

export default App
