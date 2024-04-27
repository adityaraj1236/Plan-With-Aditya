import React from 'react'
import Card from './Card'

const Tours = ({tours,  removeTour}) => {
  return (
    <div>
    {
        tours.map((tour)=>{
            return <Card {...tour} removeTour={removeTour}></Card>
        })
    }
        
    </div>
  )
}

export default Tours