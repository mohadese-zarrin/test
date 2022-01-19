import React, { useState, useEffect } from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';


function MapContainer(props) {
    const [selectedPlace, setSelectedPlace] = useState({
        name: 'this place'
    })
    const onMarkerClick = () => {
        console.log('onMarkerClick');
    }

    const onInfoWindowClose = () => {
        console.log('onInfoWindowClose');
    }
    return (
        <Map google={props.google} zoom={14}>
            <Marker onClick={onMarkerClick} name={'Current location'} />
            <InfoWindow onClose={onInfoWindowClose}>
                <div>
                    <h1>{selectedPlace.name}</h1>
                </div>
            </InfoWindow>
        </Map>
    )
}

// export default MapContainer
export default GoogleApiWrapper({
    apiKey: 'AIzaSyCIzB2GEz - xAsbLSlOtKzbGmei2vMRdkRU'
})(MapContainer)
