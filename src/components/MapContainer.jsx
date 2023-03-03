import React from "react"
import { GoogleMap, LoadScript } from '@react-google-maps/api'

const mapStyles = {        
    height: "100vh",
    width: "100%"};
  
  const defaultCenter = {
    lat: 41.3851, lng: 2.1734
  }
  


export default function MapContainer () {
    
    return (
       <LoadScript
         googleMapsApiKey='AIzaSyBMUvVM4e1DIjopxTbJcKjgyJkfqEeprUY'>
          <GoogleMap
            mapContainerStyle={mapStyles}
            zoom={13}
            center={defaultCenter}
          />
       </LoadScript>
    )
  }

