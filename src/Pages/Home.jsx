import React from 'react'
import Hero from '../components/Hero'
import Cards from '../components/Cards'
import Marq from '../components/Marq'
import Marquee from "react-fast-marquee";
import Creative from '../components/Creative';


const Home = () => {
    
  return (
 <>
<div className=''>

<Hero/>
<Cards/>

<Marquee autoFill={true} pauseOnHover={true} speed={100}>
<Marq/>
</Marquee>

<Creative/>

</div>
 </>
  )
}

export default Home
