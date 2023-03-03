import { useState } from 'react'
import './App.css'
import Navbar from '/components/Navbar.jsx'
import Spreadsheet from '/components/Spreadsheet.jsx'
import Map from '/components/Map.jsx'




function App() {


  return (
    <div className="main">  
      <Navbar />
      <div className = "input-container">
        <input className = "link-input" placeHolder = "Enter spreadsheet URL here"></input>
        <button className = "link-submit">Submit</button>
      </div>

      <Spreadsheet />
      <Map/>

      
      

    </div>
  )
}

export default App
