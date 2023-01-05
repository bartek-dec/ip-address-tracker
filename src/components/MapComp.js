import React from 'react';
import 'leaflet/dist/leaflet.css';
import {attribution, url} from "../mapSettings";
import icon from '../images/icon-location.svg';
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import L from 'leaflet';
import {useSelector} from "react-redux";

const MapComp = () => {
    const {lat, lng, isp} = useSelector((state) => state.map);
    const position = [lat, lng];
    const zoomLevel = 16;
    const markerIcon = new L.Icon({
        iconUrl: icon
    });

    return (
        <MapContainer center={position} zoom={zoomLevel} scrollWheelZoom={true}>
            <TileLayer attribution={attribution} url={url}/>
            <Marker position={position} icon={markerIcon}>
                <Popup>
                    {isp}
                </Popup>
            </Marker>
        </MapContainer>
    );
};

export default MapComp;