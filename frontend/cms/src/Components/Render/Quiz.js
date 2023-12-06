import React from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../Header/Header'
import ComprehensionQuiz from './ComprehensionQuiz'
import ClozeQuiz from './ClozeQuiz'
import CategoryQuiz from './CategoryQuiz'

const Quiz = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Submitted your test!!')
    navigate("/")
  }
  
  return (
    <>
      <Header />
      <div className='my-3'>
        <CategoryQuiz />
        <ClozeQuiz />
        <ComprehensionQuiz />
        <div className='w-24 my-3 mx-auto'>
          <button onClick={handleSubmit}
            className='bg-purple-600 text-white px-4 py-2 rounded-lg'
          >
            Submit
          </button>
      </div>
      
      </div>
      
    </>
   
  )
}

export default Quiz