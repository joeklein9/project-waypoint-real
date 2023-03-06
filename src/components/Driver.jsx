import React from "react"
import {useState} from "react"
import "/src/collapsible.css"
 

export default function Driver (props) {
    const [isOpen, setIsOpen] = useState (false)




    return (
        <div className = "collapsible">
            <button className = "toggle" onClick = {()=> setIsOpen(!isOpen)}>{props.label}</button>
            { isOpen && 
            
            <div className = "collapsible-card">
                <ul className = "collapsible-list">
                    <li className = "content">{props.name}</li>
                    <li className = "content">Phone: {props.phone}</li>
                    <li className = "content">Seats: {props.seats}</li>
                    <li className = "content">Occupied seats: {props.occupiedSeats}</li>
                    <li className = "content">Route ID: {props.routeId}</li>
                </ul>
            </div>}
        
        
        
        
        </div>

        

    )
}