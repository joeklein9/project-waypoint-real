import { useState } from 'react'
import './App.css'
import Navbar from '/components/Navbar.jsx'
//import Data from '/components/Data.jsx'




function App() {


  return (
    <div className="App">  
      <Navbar />
      <div className = "input-container">
        <input className = "link-input" placeHolder = "Enter spreadsheet URL here"></input>
        <button className = "link-submit">Submit</button>
      </div>
      
      

    </div>
  )
}

export default App
