import { useState } from 'react'
import './App.css'
import Navbar from '/src/components/Navbar.jsx'
import Spreadsheet from '/src/components/Spreadsheet.jsx'
import Input from '/src/components/Input.jsx'
import MapContainer from '/src/components/MapContainer.jsx'
import Driver from '/src/components/Driver.jsx'
import Location from '/src/components/Location.jsx'
import Participant from '/src/components/Participant.jsx'
import Collapsible from './components/Driver'
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
        <h1 className ="drivers-header">Drivers!!!</h1>
       {driversElement}
          
        
        
        

      
      
      

      </div>
    </>
  )
}

export default App
