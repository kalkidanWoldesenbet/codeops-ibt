"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function DeliveryMap({ courier, destination }) {
  const center = [
    (courier.lat + destination.lat) / 2,
    (courier.lng + destination.lng) / 2,
  ];

  return (
    <div className="h-[400px] w-full overflow-hidden rounded-xl border">
      <MapContainer
        center={center}
        zoom={13}
        scrollWheelZoom={false}
        className="h-full w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[courier.lat, courier.lng]}>
          <Popup>Courier location</Popup>
        </Marker>
        <Marker position={[destination.lat, destination.lng]}>
          <Popup>Delivery address</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
