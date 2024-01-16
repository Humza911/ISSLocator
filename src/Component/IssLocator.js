import React, { useEffect, useState } from "react";
import './IssLocator.css'


const IssLocator = () =>
{
    
    const [issLocation, setIssLocation] = useState(null);

    useEffect(()=> {
        fetch('http://api.open-notify.org/iss-now.json')
        .then(response => response.json())
        .then(data=>setIssLocation(data.iss_position))
        .catch(error=>{
            console.log('Error fetching ISS position:', error)
        })
    },[])


    return(
        <div className = "container">
        <h1 className="f2">ISS Locator</h1>
        <img alt="" src = "https://images-assets.nasa.gov/image/iss056e201248/iss056e201248~large.jpg?w=1200&h=900"></img>
        {issLocation!=null?(
        <h3>The current location of the ISS is Latitude:{issLocation.latitude} and Longitude: {issLocation.longitude}
        </h3>):
        <h3>Loading data, please wait</h3>}
        </div>
    )
}
export default IssLocator;
