'use client'
import React from 'react'
import { useState } from 'react'


export default function LoginPage() {

  const [Username, setUsername]=useState('')

  return (
    
    <main className="bg-teal-950 flex justify-center  m-5 p-10  ml-80 mr-80 border-teal-300">
      <h1 className='font-bold text-4xl text-teal-300'>User Login</h1>
       
      <form className="bg-teal-700 flex justify-center m-1 p-1">
        <input 
        type='text'
        value={Username}
        onChange={(e) => setUsername(e.target.value)}
        className=""
        placeholder='Enter username'
        />

      </form>
    </main>
  
  )
}
