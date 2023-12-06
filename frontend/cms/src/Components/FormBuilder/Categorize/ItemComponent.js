import React, { useState, useEffect } from 'react'


const ItemComponent = ({cats, handleItems}) => {
    const [ itemList, setItemList ] = useState([{item: '', id: '', category: ''}]);
    const [catlist, setCatlist] = useState('');

    const handelOptions = (cat) => {
        if(cat) {
            return cat.map((item, index) => {
                return (
                    <option value={item.cat} key={item.index}>
                        {item.cat}
                    </option>
                )
            })
        }
    }

    const handleopt = (e) => {
        setCatlist(e.target.value)
    }

    const handleInput = (e, index) => {
        let i = index        
        let newInput = [...itemList]
        newInput[i].item = e.target.value
        newInput[i].id = index
        setItemList(newInput)
    }

    const handleadd = (e) => {
        e.preventDefault();
        let lastid = itemList.length - 1
        let newArr = [...itemList]
        newArr[lastid].category = catlist
        setItemList(s => {return [...s, {newArr}]})
        handleItems(itemList)
    }

    return (
        <>
            {itemList && itemList.map((ele, index) => (
                <div className='w-full flex flex-row justify-between items-center' key={index}>
                    <input type='text' id={index} value={ele.item} onChange={e=>handleInput(e, index)} className='w-full my-2 me-4 p-2 text-black rounded-xl border border-solid' placeholder='Item1' />
                    <select onChange={handleopt} className='px-2 me-4 w-48 rounded-full'>
                        <option value='all'>Select category</option>
                        {handelOptions(cats)}
                    </select>
                    <button onClick={handleadd} className='bg-black text-white font-semibold font-lg px-2 rounded-full'>+</button>
                </div>
            ))}
        </>
    )
}

export default ItemComponent