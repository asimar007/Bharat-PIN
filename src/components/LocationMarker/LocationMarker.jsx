import React from "react";
import { Marker, Popup } from "react-leaflet";
import DigipinPopup from "../BharatPinPopup/DigipinPopup";
import MarkerEventHandler from "./MarkerEventHandler";

export default function LocationMarker({ location, onSelect, onClear }) {
  return (
    <>
      <MarkerEventHandler onSelect={onSelect} />
      {location && (
        <Marker position={[location.lat, location.lng]}>
          <Popup
            className="instant-popup"
            autoClose={false}
            closeOnClick={false}
            closeButton={false}
            maxWidth={320}
            minWidth={240}
            autoPan={true}
            autoPanPadding={[15, 15]}
            keepInView={true}
          >
            <DigipinPopup location={location} onClose={onClear} />
          </Popup>
        </Marker>
      )}
    </>
  );
}
