import { useState } from 'react'
import './App.css'
import Navbar from '/src/components/Navbar.jsx'
import Spreadsheet from '/src/components/Spreadsheet.jsx'
import Input from '/src/components/Input.jsx'
import MapContainer from '/src/components/MapContainer.jsx'




function App() {


  return (
    <div className="main">  
      <Navbar />
      <Input />
      <div className = "map-container">
        <MapContainer />
      </div>
      <Spreadsheet />
      
      

    </div>
  )
}

export default App
