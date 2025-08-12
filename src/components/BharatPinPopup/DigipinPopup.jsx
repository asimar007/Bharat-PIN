import React, { useState } from "react";
import { MapPin, Copy, CheckCircle, X } from "lucide-react";
import { useAddress } from "../../hooks/useAddress";
import AddressDetails from "./AddressDetails";

export default function DigipinPopup({ location, onClose }) {
  const [copied, setCopied] = useState(false);
  const {
    data: address,
    isPending,
    isError,
  } = useAddress(location.lat, location.lng);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(location.digiPin);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Copy failed:", err);
    }
  };

  return (
    <div className="instant-digipin-overlay p-3 sm:p-4 max-w-sm sm:max-w-md">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-1.5 min-w-0 flex-1">
          <MapPin className="w-4 h-4 text-green-700 flex-shrink-0" />
          <span className="font-bold text-gray-800 text-sm truncate">
            Bharat PIN
          </span>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="p-1 hover:bg-gray-100 rounded-full flex-shrink-0"
          title="Close"
        >
          <X className="w-4 h-4 text-gray-500" />
        </button>
      </div>

      {/* DigiPin Display + Copy Button */}
      <div className="text-center mb-3">
        <div className="bg-black text-white px-3 py-2 rounded-lg shadow-lg">
          <div className="font-mono text-base sm:text-lg font-bold tracking-wider break-all">
            {location.digiPin}
          </div>
        </div>
        <button
          onClick={handleCopy}
          className="mt-2 flex items-center gap-1.5 mx-auto px-2.5 py-1.5 bg-purple-100 hover:bg-purple-200 text-red-700 rounded-md transition-colors text-xs font-medium"
          aria-label="Copy DIGIPIN"
        >
          {copied ? (
            <>
              <CheckCircle className="w-3 h-3" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="w-3 h-3" />
              Copy PIN
            </>
          )}
        </button>
      </div>

      {/* Address Info */}
      {address && (
        <div className="border-t pt-2">
          <AddressDetails address={address} />
        </div>
      )}

      {isPending && (
        <div className="text-center text-gray-500 text-xs py-2">
          Loading address...
        </div>
      )}

      {isError && (
        <div className="text-center text-gray-500 text-xs py-2">
          Address not found
        </div>
      )}

      <div className="text-xs text-gray-400 text-center pt-2 mt-2 border-t">
        Tap map to select new location
      </div>
    </div>
  );
}
