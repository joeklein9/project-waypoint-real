import React from "react"
import {useState} from "react"
import drivers from "/data/drivers.js"
 

export default function Collapsible (props) {
    const [isOpen, setIsOpen] = useState (false)




    return (
        <div className = "collapsible">
            <button className = "toggle" onClick = {()=> setIsOpen(!isOpen)}>{drivers.name.}</button>
            { isOpen && <p className = "content">Some content</p>}
        
        
        
        
        </div>

        

    )
}