'use client'
import React from 'react'
import { useState } from 'react'


export default function LoginPage() {

  const [Username, setUsername]=useState('')
  const [Password, setPassword]=useState('')

  const changePage = async (e) =>
    {
      return 
    }
  
  return (
    
    <main className="bg-teal-950 flex flex-col justify-center  m-5 p-10  ml-80 mr-80 ">
      <h1 className='font-bold text-4xl text-teal-300 text-center mb-10'>User Login</h1>
       
      <form className="bg-teal-700 flex justify-center m-3 p-1">
        <input 
        type='text'
        value={Username}
        onChange={(e) => setUsername(e.target.value)}
        className=" flex "
        placeholder='Enter username'
        />

      </form>

      <form className="bg-teal-700 flex justify-center m-3 p-1">
        <input 
        type='text'
        value={Password}
        onChange={(e) => setPassword(e.target.value)}
        className=" flex "
        placeholder='Enter password'
        />

      </form>

        <button className='bg-teal-400 flex text-justify justify-center border-t-emerald-50 m-2 p-1' onClick={changePage}>
          Login
        </button>
    </main>
  
  )
}
