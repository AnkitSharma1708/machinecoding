import React, { useState } from 'react'

const Star = (starCount = 5) => {

  const [starValue , setStarValue] = useState();
  const [hover, setHover] = useState(0);

  return (
    <>
      <div>
        {
          new Array(starCount).fill(0).map((value , index)=>{
            return <span key={index} className={(hover == 0 && index < starValue) || index < hover ? "gold" : ''} onClick={()=> setStarValue(index +1 )} 
             onMouseEnter={()=> setHover(index + 1)}
             onMouseLeave={()=> setHover(0)}>
              &#x2606;
            </span>
          })
        }
      </div>
    </>
  )
}

export default Star