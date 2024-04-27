import React, { useState } from 'react'

function Card({image  , id ,name , info ,price , removeTour}) {
  // isse certain characters takk hi dikhenge jitna chahoge 
  const[readmore ,setReadmore] = useState(false);
  const description= `${info.substring(0,200)}....`
  function clicklistener() {
    setReadmore(!readmore);
  }
 
  return (
    <div className='card'>
    <img src={image} alt='' className='image'/>
    <div >
      <h4>{price}</h4>
      <h4>{name}</h4>
    </div>



    <div>
    {/* note haem poora info nai likhana hai starting k 200 chars hi show krne hain  */}
      <p>{description}</p>
      <span onClick={clicklistener}>
        {readmore ? `show less` : `read more`}
      </span>
    </div>

    <button onClick={()=>{removeTour(id)}}>Not Interested</button>

    </div>
  )
}

export default Card