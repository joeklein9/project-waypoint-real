import Navbar from '/src/components/Navbar.jsx'
import Driver from '/src/components/Driver.jsx'
import {drivers} from '/data/drivers.js'
//import {participants} from '/data/participants.js'
//import {locations} from '/data/locations.js'






function App() {

  const driversElement = drivers.map(driver => {
   return  <Driver
   label = {driver.name} 
        phone = {driver.phone} 
        seats = {driver.seats} 
        occupiedSeats = {driver.occupiedSeats}
        routeId = {driver.routeId}
   
   
   />
  })


  return (

    <>
      <Navbar />
      <div className="driver-container">
        <h1 className ="drivers-header">Drivers</h1>
       {driversElement}
          
        
        
        

      
      
      

      </div>
    </>
  )
}

export default App
