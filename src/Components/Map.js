import React from "react";
import { MapContainer as LeafletMap, useMap, TileLayer } from "react-leaflet";
import "../Styles/Map.css";

function ChangeView({ center, zoom }) {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}

function Map({ center, zoom }) {
  return (
    <div className="map">
      <LeafletMap center={center} zoom={zoom}>
        <ChangeView center={center} zoom={zoom} />
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </LeafletMap>
    </div>
  );
}

export default Map;
