import React, { useState, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet'
import { createControlComponent } from '@react-leaflet/core'
import { Control } from 'leaflet'

function LeafMap() {
    const [position, setPosition] = useState([0, 0])
    const [currentPos, setCurrentPos] = useState({ latitude: 0.0, longitude: 0.0 })
    const [loading, setloading] = useState(true)
    const [address, setAddress] = useState('')
    const [zoom, setZoom] = useState(7)
    var options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    };
    useEffect(() => {
        navigator.geolocation.getCurrentPosition((myPosition) => {
            console.log(myPosition);
            setCurrentPos(myPosition.coords)
            setPosition([myPosition.coords.latitude, myPosition.coords.longitude])
            setZoom(17)
            setloading(false)
        },
            (e) => {
                console.log(e, 'error');
                setloading(false)
            },

            options
        )
    }, [])

    function LocationMarker() {
        const map = useMapEvents({
            click(e) {
                setPosition([e.latlng.lat, e.latlng.lng])
                map.flyTo(e.latlng, map.getZoom())
            },
            locationfound(e) {
                setPosition([e.latlng.lat, e.latlng.lng])
                setCurrentPos(e.latlng)
                map.flyTo(e.latlng, map.getZoom())
            },
        })

        return position === null ? null : (
            <Marker position={position}>
                <Popup>مطب شما</Popup>
            </Marker>
        )
    }
    console.log(position, 'position');
    return (
        <div style={{ width: 500, height: 500, border: '1px solid red', overflow: 'hidden' }}>
            {!loading ?
                <MapContainer
                    style={{ width: '100%', height: 500, borderRadius: 8, overflow: 'hidden' }}
                    center={[currentPos.latitude, currentPos.longitude]}
                    zoom={zoom}
                    scrollWheelZoom={false}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {/* <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png"
                    /> */}
                    <LocationMarker />
                    {/* <ZoomControl /> */}
                </MapContainer>
                :
                'Loading...'
            }
        </div>
    )
}

export default LeafMap
