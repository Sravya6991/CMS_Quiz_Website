import React, { useState } from 'react'
import axios from 'axios';
import FormComprehsion from './FormComprehsion'

export default function Comprehension() {
    const [ comprehension, setComprehension ] = useState([])

    const handleChange = (e) => {
        const { name, value } = e.target
        setComprehension({...comprehension, [name]: value})   
    }

    const handleCheckbox = (e) => {
        if(e.target.checked) {
            setComprehension({
                ...comprehension,
                answer: e.target.value
            })
        }
    }

    const handleAddQues = () => {      
       
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(comprehension)
        axios.post("https://cms-quiz-backend.onrender.com/comprehension", 
        {
            body: comprehension
        }, 
        { headers: {
            'Content-Type': 'application/json'
            }
        }
        ).then(res => console.log(res.data))

    }
    
  return (
    <div className='container mx-auto my-3 p-7 border border-solid border-black'>
        <h1 className='text-xl underline underline-offset-1 font-semibold text-blue-600'>Comprehension</h1>

        <form id='form-question' onSubmit={handleSubmit}>
            <textarea className='form-textarea w-full my-8 h-36 overflow-auto' name='passage' value={comprehension.passage} onChange={handleChange}></textarea>
            <div>
                <FormComprehsion comprehension={comprehension} handleChange={handleChange} handleCheckbox={handleCheckbox} />
                <button className='bg-cyan-500 p-2 text-white w-48 my-4 mx-auto rounded-full'>Submit</button>
            </div>
            <button type='button' className='bg-indigo-500 p-2 text-white w-48 my-4 mx-auto rounded-full' onClick={handleAddQues}>Add Question</button>
        </form>

    </div>
  )
}

