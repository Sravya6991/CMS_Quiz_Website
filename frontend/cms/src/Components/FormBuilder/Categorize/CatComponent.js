import React, {useState} from 'react'

const CatComponent = ({  handleForm }) => {
    const [ categoryList, setCategoryList ] = useState([{ id: "", cat: '' }]);
    
    const handleCat = (e, i) => {
        let newForm = [...categoryList]
        newForm[i][e.target.name] = e.target.value
        newForm[i].id = i
        setCategoryList(newForm)
    }

    const handleadd = (e) => {
        e.preventDefault();
        setCategoryList(s => {
            let lastid = s[s.length-1].id
            return [ 
                ...s, 
                { 
                    id: lastid + 1,
                    cat: '' 
                }
            ]}
        )
        sessionStorage.setItem('cat', JSON.stringify(categoryList))
        handleForm(categoryList)
    }

    return (
        <div>

            {categoryList && categoryList.map((ele, index) => {
                return (
                    <div className='flex justify-evenly items-center'>
                        <input type={ele.text} key={index} name='cat' value={ele.cat} id={index} onChange={(e)=>handleCat(e, index)} className='w-full me-3 my-2 p-2 text-black rounded-xl border border-solid' placeholder='Cat1' />
                        <button onClick={handleadd} className='bg-black text-white font-semibold font-lg px-2 rounded-full'>+</button>                                
                    </div>
                    
                    )
            })}
        </div>
    )
}

export default CatComponent