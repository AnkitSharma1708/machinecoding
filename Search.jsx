import React, { useState } from 'react'

const Search = () => {

  const data = ['Apple' , 'Mango' , 'Cherry' , 'Banana' , 'Pineapple' , 'Papaya' , 'Orange', 'Lemon'];

  const [userInput , setUserInput] = useState('');

  const res = data.filter((item) => {
   return  item.toLowerCase().includes(userInput.toLowerCase());
  })

  return (
    <>
      <input className='searchbar' type="text" placeholder='Search karlo' value={userInput} onChange={(e)=> setUserInput(e.target.value)} />
      <div className='list'>
        {
          res.map((item , index) => {
           return <li key={index}>{item}</li>
          })
        }
      </div>
    </>
  )
}

export default Search