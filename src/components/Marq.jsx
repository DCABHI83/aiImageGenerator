import React from 'react'

const Marq = () => {
    const arr = [
    {
      title: "Create big",
      emoji: "🖌️"
    },
    {
      title: "Elevate fast",
      emoji: "📈"
    },
    {
      title: "Go beyond",
      emoji: "🌍"
    },
    {
      title: "Innovate now",
      emoji: "🚀"
    },
    {
         title: "Inspire all",
    emoji: "⭐",
    }
  ]
  return (
  <>

  <div className='flex gap-40 bg-[#19122F] p-10 mt-5 w-full'>
  {
  arr.map((curELem,index)=>{
   return(
     <div key={index} className='flex'>
    <div className='flex gap-2'>
          <h1 className='text-3xl'>{curELem.emoji}</h1>
      <h2 className='font-bold text-3xl text-[#AF3EC9]'>{curELem.title}</h2>
    </div>
    </div>
   )
  })
  }
  
  </div>

  </>
  )
}

export default Marq
