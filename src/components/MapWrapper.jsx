import { useEffect } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";

const MapUpdater = ({ center }) => {
  const map = useMap();

  useEffect(() => {
    map.flyTo([center.lat, center.lng], map.getZoom(), {
      duration: 2, // Smooth animation
    });
  }, [center, map]);

  return null;
};

export default function MapWrapper({ center, children }) {
  return (
    <MapContainer
      center={[center.lat, center.lng]}
      zoom={13}
      className="h-full w-full z-0"
      zoomControl={false}
      touchZoom={true}
      scrollWheelZoom={true}
      doubleClickZoom={true}
      dragging={true}
    >
      <MapUpdater center={center} />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {children}
    </MapContainer>
  );
}
