import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='w-full bg-lime-900 p-2'>
      <nav className='text-white font-xl font-semibold flex justify-evenly p-2'>
        <Link to='/' className='me-4'> Home </Link>
        <Link to='/quiz' className='me-4'> Quiz </Link>
        <Link to='/categorize' className='me-4'>Categorize Test</Link>
        <Link to='/Cloze' className='me-4'>Cloze Test</Link>
        <Link to='/comprehension' className='me-4'>Comprehension Test</Link>
      </nav>
    </header>
  )
}

export default Header