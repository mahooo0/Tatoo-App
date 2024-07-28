// components/Map.js
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 40.748817, // Replace with your shop's latitude
  lng: -73.985428 // Replace with your shop's longitude
};

const Map = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyDIJ9XX2ZvRKCJcFRrl-lRanEtFUow4piM">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
}

export default Map;
