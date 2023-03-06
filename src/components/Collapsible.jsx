import React from "react"
import {useState} from "react"
 

export default function Collapsible (props) {
    const [isOpen, setIsOpen] = useState (false)




    return (
        <div className = "collapsible">
            <button className = "toggle" onClick = {()=> setIsOpen(!isOpen)}>{props.label}</button>
            { isOpen && <p className = "content">{props.children}</p>}
        
        
        
        
        </div>

        

    )
}