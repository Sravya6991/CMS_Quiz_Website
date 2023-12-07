import React, { useEffect, useState, useRef } from 'react'

const ClozeQuiz = () => {
    const [cloze, setCloze] = useState([]);
    const noderef = useRef(null);

    useEffect(() => {
        fetch('https://cms-quiz-backend.onrender.com/getCloze', { method: 'Get' })
            .then(res => res.json())
            .then(res => {
                setCloze(res.response)
                // console.log(res)
            })
    });

    function handleDragStart(e) {
        e.dataTransfer.setData('text', e.target.id)
        console.log('drag start')
    }

    function handleDragOver(e) {
        e.preventDefault()
        console.log('drag allowed')
    }

    function handleDrop(e) {
        e.preventDefault();
        var data = e.dataTransfer.getData('text')
        console.log(data)
        e.target.appendchild(document.getElementById(data))
        console.log('drop')
    }

    return (
        <div className='container border border-black w-5/6 mx-auto p-3 mb-3'>
            <h1 className='my-2 underline text-violet-600 font-medium text-lg'>Cloze Quiz</h1>
            <div>
                {cloze.map((item) => {
                    return (
                        <div id='dragzone' className='border border-black p-3 mx-auto my-2'>
                            <p className='my-2'>{item.clozeOptions.map((arr, index) => {
                                return (
                                    <span onDragStart={handleDragStart} id={`drag${index}`} className='border rounded-xl bg-amber-700 text-white p-2 m-3' draggable='true'>{arr}</span>
                                )
                            })}
                            </p>

                            <div ondrop={handleDrop} onDragOver={handleDragOver} className='mt-3'>
                                <h4 className='my-2 p-3'>{item.cloze_question}</h4>
                            </div>

                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ClozeQuiz