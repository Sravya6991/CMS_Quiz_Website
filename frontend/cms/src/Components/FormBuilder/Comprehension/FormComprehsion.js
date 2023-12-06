import React from 'react'

const FormComprehsion = ({ comprehension, handleChange, handleCheckbox }) => {
    return (
        <div>
            <h4 className='mb-3'>Question:</h4>
            <div className='flex items-center justify-between'>
                <input className='form-input w-2/3' value={comprehension.question} name='question' onChange={handleChange} placeholder='Type your question here' />
                <input type='number' className='w-24' value={comprehension.point} name='point' onChange={handleChange} placeholder='Add points for this question' />
            </div>
            <div>
                <ul>
                    <li className='my-5'>
                        <input type='checkbox' className='form-checkbox me-4' id='opt1' name='opt1' value={comprehension.option1} onClick={handleCheckbox} />
                        <input className='form-input' name='option1' value={comprehension.option1} onChange={handleChange} placeholder='option' />
                    </li>

                    <li className='my-5'>
                        <input type='checkbox' className='form-checkbox me-4' id='opt2' name='opt2' value={comprehension.option2} onClick={handleCheckbox} />
                        <input className='form-input' name='option2' value={comprehension.option2} onChange={handleChange} placeholder='Option' />
                    </li>

                    <li className='my-5'>
                        <input type='checkbox' className='form-checkbox me-4' id='opt3' name='opt3' value={comprehension.option3} onClick={handleCheckbox} />
                        <input className='form-input' name='option3' value={comprehension.option3} onChange={handleChange} placeholder='Option' />
                    </li>

                    <li className='my-5'>
                        <input type='checkbox' className='form-checkbox me-4' id='opt4' name='opt4' value={comprehension.option4} onClick={handleCheckbox} />
                        <input className='form-input' name='option4' value={comprehension.option4} onChange={handleChange} placeholder='Option' />
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default FormComprehsion