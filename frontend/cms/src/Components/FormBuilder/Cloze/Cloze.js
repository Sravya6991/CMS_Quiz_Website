import React, { useEffect, useState } from 'react'
import ClozeOptions from './ClozeOptions';
import axios from 'axios';

const url = "https://cms-quiz-backend.onrender.com/postCloze";

const Cloze = () => {
  const [text, setText] = useState("")
  const [preview, setPreview] = useState("")
  const [blank, setBlank] = useState([])
  const [cloze, setCloze] = useState([{
    cloze_question: '',
    clozeOptions: []
  }])

  useEffect(() => {
    const prev = document.getElementById('textElement')
    const splitvalue = prev.value.split(' ')
    const res = splitvalue.map(item => {
      if(blank.includes(item)){
        return item.replace(item, '_______________')
      }
      return item
    })
    const prevRes = res.join(' ')
    setPreview(prevRes)
  },[blank]);

  const handleText = (e) => {
    setText(e.target.value)
  }

  const handleSelect = () => {
    const result = document.getSelection().toString()
    if( result !== '') {
      setBlank([...blank, result])
    }
    console.log(blank)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let index = cloze.length - 1
    setCloze(s => {
      let newArr = [...s];
      newArr[index].cloze_question = text;
      newArr[index].clozeOptions = blank
      return [ newArr, { cloze_question: '', clozeOptions: [] } ]
    });
    setText("")
    setBlank([])

    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        cloze_question: preview,
        clozeOptions: blank
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(res => console.log(res))
  }

  return (
    <form onSubmit={handleSubmit} className='container mx-auto border border-black my-3 p-5 w-full'>
      <h1 className='text-xl underline underline-offset-1 font-semibold text-blue-600'>Cloze</h1>
      <p className='w-full mt-2'>
        <strong>Note:</strong> After writing text in 'Question blank' select your word. 
        It will automatically added to list 
      </p>
      <div className='w-full my-4'>
        <h3>Preview:</h3>
        <input type='text' value={preview} id='preview' className='w-full' placeholder='your preview' readOnly />
      </div>

      <div className='w-full'>
        <h3>Your question</h3>
        <input type='text' value={text} id='textElement' onChange={handleText} onSelect={handleSelect} className='w-full mb-5' placeholder='Enter your question' />

        <ClozeOptions blank={blank} setBlank={setBlank}/>

        <button className='bg-cyan-500 p-2 text-white w-48 my-4 mx-auto rounded-full'>
          Submit
        </button>
      </div>
    </form>
  )
}

export default Cloze