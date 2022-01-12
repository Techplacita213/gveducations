import React from 'react'
import {Map,GoogleApiWrapper, Marker} from 'google-maps-react'

function GMap(props) {
    const mapStyles={
        width:"400px",
        height:"400px"
    }
    return (
        <div id="map" style={{width:"400px",position:"relative",height:"400px"}}>
            <Map
                google={props.google}
                initialCenter={{lat:28.14345675223037,lng:-82.31242877563973}}
                zoom={16}
                style={mapStyles}
            >
                <Marker lat={28.14345675223037} lng={-82.31242877563973} title={`10335 Cross Creek Blvd
Suite 27
Tampa, FL 33647
+1 813-682-7164

`}/>
                </Map>
        </div>
    )
}

export default GoogleApiWrapper({
    apiKey:'AIzaSyBGFw7KmJJy-bHNa3yHRiv5ZAAhLEH13Ig'
})(GMap)