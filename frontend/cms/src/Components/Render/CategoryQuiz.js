import React, { useEffect, useState } from 'react'
import axios from 'axios';

const CategoryQuiz = () => {
  const [category, setCategory] = useState()
  const [itemlist, setItemlist] = useState()

  useEffect(() => {
    axios.get('http://localhost:5000/getCategory')
    .then(res => {
      console.log(res.data.response)
      let result = res.data.response[0]
      let cats = JSON.parse(result.category)
      setCategory(cats)
      setItemlist(JSON.parse(result.itemList))
      console.log(itemlist)
    })
    },[])

  return (
    <div className='container border border-black w-5/6 mx-auto p-3 mb-3'>
        <h1 className='my-2 underline text-violet-600 font-medium text-lg'>Category</h1>
        <div>
          <div id='items' className='text-center my-3'>
            {itemlist && itemlist.map((item) => {
              return <span key={item.id} className='border rounded-xl bg-amber-700 text-white p-2 m-3' draggable='true'>
                        {item.item}
                      </span>
            })}
          </div>
        
          <div id='category' className='flex flex-row justify-evenly'>
            {category && category.map((item) => {
              return <div key={item.id} className='border rounded-xl bg-orange-300 text-white p-2 m-3 h-64 w-60 text-center font-semibold text-xl' draggable='true'>{item.cat}</div>
            })}
          </div>
        </div>
    </div>
  )
}

export default CategoryQuiz