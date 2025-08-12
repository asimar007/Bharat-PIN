import { MapContainer, TileLayer } from "react-leaflet";

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
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {children}
    </MapContainer>
  );
}
