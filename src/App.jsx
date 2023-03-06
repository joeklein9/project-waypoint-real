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


  return (

    <>
      <Navbar />
      <div className="driver-container">
        <Driver 
        label = {drivers[0].name} 
        phone = {drivers[0].phone} 
        seats = {drivers[0].seats} 
        occupiedSeats = {drivers[0].occupiedSeats}
        routeId = {drivers[0].routeId}
        >
          <p>Driver name: {drivers[0].name}</p>
        </Driver>
        <Driver 
        label = {drivers[1].name} 
        phone = {drivers[1].phone} 
        seats = {drivers[1].seats} 
        occupiedSeats = {drivers[1].occupiedSeats}
        routeId = {drivers[1].routeId}
        >
          <p>Driver name: {drivers[1].name}</p>
        </Driver>
        
        

      
      
      

      </div>
    </>
  )
}

export default App
