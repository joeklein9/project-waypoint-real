import React from "react"
import { GoogleMap, LoadScript } from '@react-google-maps/api'

const mapStyles = {        
    height: "75vh",
    width: "75vh"};
  
  const defaultCenter = {
    lat: 33.753746, lng: -84.386330
  }

  const locations = [
    {
      name: "Location 1",
      location: { 
        lat: 41.3954,
        lng: 2.162 
      },
    },
    {
      name: "Location 2",
      location: { 
        lat: 41.3917,
        lng: 2.1649
      },
    },
    {
      name: "Location 3",
      location: { 
        lat: 41.3773,
        lng: 2.1585
      },
    },
    {
      name: "Location 4",
      location: { 
        lat: 41.3797,
        lng: 2.1682
      },
    },
    {
      name: "Location 5",
      location: { 
        lat: 41.4055,
        lng: 2.1915
      },
    }
  ];
  


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

