import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(10)

  return (
    <div className="App">
      <input className = "link-input" placeHolder = "Enter spreadsheet URL here"></input>
    </div>
  )
}

export default App
