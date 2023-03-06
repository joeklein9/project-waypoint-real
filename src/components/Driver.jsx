import React from "react"
import {useState} from "react"
 

export default function Driver (props) {
    const [isOpen, setIsOpen] = useState (false)




    return (
        <div className = "driver">
            <button className = "toggle" onClick = {()=> setIsOpen(!isOpen)}>{props.label}</button>
            { isOpen && 
            
            <div className = "driver-card">
                <ul className = "driver-list">
                    <li className = "content">{props.name}</li>
                    <li className = "content">Phone: {props.phone}</li>
                    <li className = "content">Seats: {props.seats}</li>
                    <li className = "content">Occupied seats: {props.occupiedSeats}</li>
                    <li className = "content">Route Id: {props.routeId}</li>
                </ul>
            </div>}
        
        
        
        
        </div>

        

    )
}