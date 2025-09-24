import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
<>

<div className='flex justify-between p-3 items-center gap-2 md:p-4'>
 <div>
    <h1 className='text-xl text-white md:text-3xl'>ChitraKaari</h1>
 </div>

 <div className='flex gap-3 text-xl justify-center items-center text-white'>
    <NavLink to='/'> 
Home
    </NavLink>
    <NavLink to='/about'>
About
    </NavLink>
    <NavLink to='/pricing'>
Pricing
    </NavLink>
    <NavLink to='/signup' className="border px-2 py-1 rounded">
SignUp
    </NavLink>
 </div>

</div>

</>
  )
}

export default Header
