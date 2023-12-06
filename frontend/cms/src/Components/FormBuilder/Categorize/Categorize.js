import React, { useState } from 'react'
import CatComponent from './CatComponent';
import ItemComponent from './ItemComponent';

const Categorize = () => {
    const [ title, setTitle ] = useState("");
    const [cat, setCat] = useState([]);
    const [itemlist, setItemlist] = useState([]); 

    const handleChange = (e) => {
        setTitle(e.target.value)
    }

    const handleForm = (category) => {
        console.log("From main: ", category)
        setCat(category)
    }

    const handleItems = (itemslist) => {
        setItemlist(itemslist)
        console.log("itemList: ", itemlist)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submit item:', itemlist)

        let newArr = {
            description: title,
            category: JSON.stringify(cat),
            itemList: JSON.stringify(itemlist)
        }
        console.log('newar: ', newArr)

        fetch('http://localhost:5000/postCategory', 
        {
            method: 'POST',
            body: JSON.stringify(newArr),
            headers: { 'Content-Type': 'application/json' }
        })
        .then(res => res.json())
        .then(res => console.log(res))
    }

    return (
        <div className='container mx-auto border border-black p-4 mb-3'>
            <h1 className='text-xl underline underline-offset-1 font-semibold text-blue-600'>Categorize</h1>

            <form className='container w-80 flex flex-col'>
                <input type='text' value={title} onChange={handleChange} className='w-full my-3 text-black rounded-xl border border-solid' placeholder='Description of category' />
                
                <h5 className='mt-3 text-md'>Add category:</h5>

                <CatComponent handleForm={(cat) => handleForm(cat)}/>

                <div className='grid grid-cols-auto my-2'>
                    <h5 className='text-md'>Items:</h5>
                    <ItemComponent cats={cat} handleItems={(items) => handleItems(items)}/>
                </div>

                <button type='submit' onClick={handleSubmit} className='bg-cyan-500 p-2 text-white w-48 my-4 rounded-full'>
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Categorize