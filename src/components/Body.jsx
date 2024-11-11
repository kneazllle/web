import React from 'react'
import Navbar from './Navbar/Navbar'
import Hero from './Hero/Hero'

export default function Body() {
  return (
    <div>
      <Navbar />
      <div className="container"><Hero /></div>
    </div>
  )
}
