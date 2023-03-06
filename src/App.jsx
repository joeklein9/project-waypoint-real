import { useState } from 'react'
import './App.css'
import Navbar from '/src/components/Navbar.jsx'
import Spreadsheet from '/src/components/Spreadsheet.jsx'
import Input from '/src/components/Input.jsx'
import MapContainer from '/src/components/MapContainer.jsx'
import Driver from '/src/components/Driver.jsx'
import Location from '/src/components/Location.jsx'
import Participant from '/src/components/Participant.jsx'
import Collapsible from './components/Collapsible'




function App() {


  return (

    <>
      <Navbar />
      <div className="main">
        <Collapsible label = "Driver">
          <p>This is the driver content</p>
        </Collapsible>
        <Collapsible label = "Participant">
          <p>This is the participant content</p>
        </Collapsible><Collapsible label = "Location">
          <p>This is the location content</p>
        </Collapsible>
        

      
      
      

      </div>
    </>
  )
}

export default App
