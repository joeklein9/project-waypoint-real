import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from '/components/Navbar.jsx'


function App() {
  const [count, setCount] = useState(10)

  return (
    <div className="App">  
      <Navbar />
      <div className = "input-container">
        <input className = "link-input" placeHolder = "Enter spreadsheet URL here"></input>
      </div>
      
      

    </div>
  )
}

export default App
