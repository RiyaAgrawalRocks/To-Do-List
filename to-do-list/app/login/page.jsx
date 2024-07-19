'use client'
import React from 'react'
import {useState} from 'react'
import {useRouter} from 'next/navigation'


export default function LoginPage() {

  const [Username, setUsername] = useState('')
  const [Password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const router = useRouter();

  const changePage = async (e) => {
    router.push('/todo')
  }

  return (

    <main
      className="w-screen h-screen flex flex-col justify-center items-center p-10 bg-gradient-to-b from-teal-950 to-teal-600">
      <h1 className='font-bold text-4xl text-teal-300 text-center mb-10'>User Login</h1>

      <div className="flex flex-col justify-center items-center w-fit bg-teal-800 border-2 border-teal-950">
        <div className="flex justify-center m-3 p-1 gap-2">
          <label>Username:</label>
          <input
            type='text'
            value={Username}
            onChange={(e) => setUsername(e.target.value)}
            className=" flex text-black"
            placeholder='Enter username'
          />
        </div>

        <div className="flex justify-center m-3 p-1 gap-2 relative">
          <label>Password:</label>
          <input
            type={showPassword ? 'text' : 'password'}
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
            className=" flex text-black outline-0"
            placeholder='Enter password'
          />
          <button className="bg-teal-400 px-2 text-black absolute right-0"
                  onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? 'H' : 'S'}
          </button>
        </div>

        <button className='bg-teal-400 flex text-justify justify-center border-t-emerald-50 m-2 p-1 rounded'
                onClick={changePage}>
          Login
        </button>
      </div>

    </main>

  )
}
