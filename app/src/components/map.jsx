import dynamic from 'next/dynamic';
import React, { useEffect } from 'react';
import 'leaflet/dist/leaflet.css';

// Dynamically import the MapContainer, Marker, and Popup components
const MapContainer = dynamic(
    () => import('react-leaflet').then((mod) => mod.MapContainer),
    { ssr: false }
);

const TileLayer = dynamic(
    () => import('react-leaflet').then((mod) => mod.TileLayer),
    { ssr: false }
);

const Marker = dynamic(
    () => import('react-leaflet').then((mod) => mod.Marker),
    { ssr: false }
);

const Popup = dynamic(() => import('react-leaflet').then((mod) => mod.Popup), {
    ssr: false,
});

export default function Map() {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const L = require('leaflet');

            // Set the custom marker icon
            const customIcon = new L.Icon({
                iconUrl: 'https://cdn-icons-png.flaticon.com/512/25/25613.png',
                iconSize: [32, 32], // Set the size of the icon as needed
                iconAnchor: [16, 32], // The anchor point of the icon, corresponds to its base
                popupAnchor: [0, -32], // The point from which the popup should open relative to the iconAnchor
            });

            // Apply the custom icon globally for all markers
            L.Marker.prototype.options.icon = customIcon;
        }
    }, []);

    return (
        <MapContainer
            center={[40.3768, 49.84839]}
            zoom={20}
            scrollWheelZoom={false}
            style={{ height: '600px', width: '100%' }} // Ensure the map fills the container
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[40.3768, 49.84839]}>
                <Popup>
                    Новодмитровская ул., д. 1, стр. 1,
                    <br /> Москва, метро Дмитровская
                </Popup>
            </Marker>
        </MapContainer>
    );
}
