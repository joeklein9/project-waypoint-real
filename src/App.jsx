import { useState } from 'react'
import './App.css'
import Navbar from '/src/components/Navbar.jsx'
import Spreadsheet from '/src/components/Spreadsheet.jsx'
import Input from '/src/components/Input.jsx'
import MapContainer from '/src/components/MapContainer.jsx'
import Driver from '/src/components/Driver.jsx'
import Location from '/src/components/Location.jsx'
import Participant from '/src/components/Participant.jsx'
import Collapsible from '/src/components/Collapsible.jsx'




function App() {


  return (

    <>
      <Navbar />
      <div className="main">
        <Driver />
        <Participant/>
        <Location />
        
      
      
      
      
      

      </div>
    </>
  )
}

export default App
