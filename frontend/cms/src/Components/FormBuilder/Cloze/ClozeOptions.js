import React, { useState } from 'react'

const ClozeOptions = ({ blank, setBlank }) => {

  const handleremove = (i) => {
    let newBlank = [...blank]
    newBlank.splice(i, 1)
    setBlank(newBlank)
  }

  return (
    <div>
      {blank && blank.map((ele, index) => {
        return (
          <div className='flex justify-evenly'>
            <input type='text' key={index} value={ele} id={index} className='w-full my-2 me-2 p-2 text-black rounded-xl border border-solid' placeholder='Cat1' />
            <button onClick={()=>handleremove(index)} className='border rounded-full bg-black text-white font-semibold p-2'> X </button>        
          </div>
        )
      })}
    </div>
  )
}

export default ClozeOptions