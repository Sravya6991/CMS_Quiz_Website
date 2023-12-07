import React, { useEffect, useState } from 'react'
import axios from 'axios'

const url = 'https://cms-quiz-backend.onrender.com/getcomprehension'

const ComprehensionQuiz = () => {
    const [compre, setCompre] = useState([])
    const [message, setMessage] = useState("")

    useEffect(() => {
        axios.get(url).then(res => {
            setCompre(res.data.response[0].body)
            console.log(res.data.response[0].body)
        })
    }, [])

    const handleClick = (e) => {
        if (e.target.checked) {
            console.log(e.target.value)
            setMessage(e.target.value)
        }
    }
    return (
        <div className='container w-5/6 p-4 mx-auto border border-black'>
            <h1 className='my-2 underline text-violet-600 font-medium text-lg'>Comprehension quiz</h1>
            <div>
                <h6 className='underline underline-offset-1 mb-2'>Passage:</h6>
                <p>{compre.passage}</p>

                <div className='my-4'>
                    <p>1. {compre.question}</p>
                    <ul>
                        <li>
                            <input type='radio' name='option1' value={compre.option1} onClick={handleClick} /> <label for='option1'>{compre.option1}</label>
                        </li>
                        <li>
                            <input type='radio' name='option2' value={compre.option2} onClick={handleClick} /> <label for='option2'>{compre.option2}</label>
                        </li>
                        <li>
                            <input type='radio' name='option3' value={compre.option3} onClick={handleClick} /> <label for='option3'>{compre.option3}</label>
                        </li>
                        <li>
                            <input type='radio' name='option4' value={compre.option4} onClick={handleClick} /> <label for='option4'>{compre.option4}</label>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ComprehensionQuiz