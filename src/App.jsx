import { useState } from 'react'
import './App.css'
import Navbar from '/src/components/Navbar.jsx'
import Spreadsheet from '/src/components/Spreadsheet.jsx'
import MapContainer from '/src/components/MapContainer.jsx'




function App() {


  return (
    <div className="main">  
      <Navbar />
      <div className = "input-container">
        <input className = "link-input"></input>
        <button className = "link-submit">Submit</button>
      </div>

      <Spreadsheet />
      <MapContainer/>

      
      

    </div>
  )
}

export default App
