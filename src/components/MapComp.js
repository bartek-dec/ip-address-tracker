import React, {useState} from 'react';
import 'leaflet/dist/leaflet.css';
import {attribution, url} from "../mapSettings";
import icon from '../images/icon-location.svg';
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import L from 'leaflet';


const MapComp = () => {
    const [position, setPosition] = useState({lat: 51.505, lng: -0.09})
    // const position = [53.505, -0.09];
    const markerIcon = new L.Icon({
        iconUrl: icon
    });

    return (
        <MapContainer center={position} zoom={16} scrollWheelZoom={true}>
            <TileLayer attribution={attribution} url={url}/>
            <Marker position={position} icon={markerIcon}>
                <Popup>
                    A pretty CSS3 popup. <br/> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    );
};

export default MapComp;