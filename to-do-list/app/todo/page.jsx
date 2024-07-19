'use client'
import React, { useState } from 'react'


export default function Todo() {
let list=[]
const [task, setTask]=useState('')
const [status, setStatus]=useState('')

function displayList() {

}

  return (
    <main className='bg-teal-950 m-3 p-4'>
    <div className='font-bold text-teal-500 text-3xl flex m-2  '> 
            {displayList}
    </div>
    </main>

  )
}
