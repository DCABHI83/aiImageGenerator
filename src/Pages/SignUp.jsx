import React, { useState } from 'react'
import { toast } from 'react-toastify'
const SignUp = () => {
const [user,setUser]= useState({
  username:"",
  email:"",
  password:""
})

const handleSubmit = (e)=>{
e.preventDefault()
toast.success("Form submitted successfully")

}


const handleChange = (e)=>{
  let name = e.target.name
  let value = e.target.value

  setUser({
    ...user,
    [name]:value
  })

}
  
  return (
<>

<div className='flex justify-center items-center h-[80vh] flex-col gap-10'>
  <div className='flex text-white items-center justify-center w-full'>
    <form onSubmit={handleSubmit} className='flex flex-col w-[70vh] gap-2 shadow-lg shadow-fuchsia-400 p-10 rounded-xl'>
  <label htmlFor="username" className='text-2xl'>Username</label>
  <input type="text" name='username' value={user.username} onChange={handleChange} className='border rounded-xl bg-white text-black px-2 py-2' required  />
  <label htmlFor="email" className='text-2xl'>Email</label>
  <input type="email" name='email' value={user.email} onChange={handleChange} className='border rounded-xl bg-white text-black px-2 py-2' required />
  <label htmlFor="password" className='text-2xl'>Password</label>
  <input type="password" name='password' value={user.password} onChange={handleChange} className='border rounded-xl bg-white text-black px-2 py-2' required/>
  <button type='submit' className='cursor-pointer w-full bg-[#581C87] rounded-xl px-2 py-2 my-2'>Submit</button>
    </form>
</div>
</div>
</>
  )
}

export default SignUp
