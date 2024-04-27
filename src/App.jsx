import React, { useState } from 'react'
import data from './Data'
import Tours from './components/Tours';

const App = () => {

  const [tours , setTours] = useState(data);
  // id ke dwara remove krenge 
  function removeTour(id) {
    // how to remove 
    const newTours = tours.filter(tour=>tour.id !==id);

    
  }
  
  return (
    <div>
      <h1>Plan with Aditya</h1>
      {/* as a prop  */}
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  )
}

export default App