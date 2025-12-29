import React from "react";
import { Share2 } from "lucide-react";
import CopyPinButton from "./CopyPinButton";
import PinSearchInput from "./PinSearchInput";

export default function StatusBar({ location, onSearchLocation, onShare }) {
  return (
    <div className="bg-white border-t shadow-sm pb-safe">
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
        {/* Mobile View - Optimized for small screens */}
        <div className="sm:hidden">
          <div className="py-3 space-y-3">
            {/* PIN Display Section */}
            <div className="flex items-center justify-between gap-2 bg-gray-50 rounded-lg p-3">
              <div className="flex-1 min-w-0">
                <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                  Bharat PIN
                </div>
                <div className="font-mono font-semibold text-red-600 text-sm break-all">
                  {location.digiPin}
                </div>
              </div>
              <div className="flex-shrink-0 flex gap-1">
                <CopyPinButton text={location.digiPin} />
                <button
                  onClick={onShare}
                  className="p-2 text-gray-500 hover:text-black hover:bg-gray-100 rounded-md transition-colors"
                  aria-label="Share Location"
                >
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Search Section */}
            <div className="w-full">
              <PinSearchInput onSearch={onSearchLocation} />
            </div>
          </div>
        </div>

        {/* Tablet View - Medium screens */}
        <div className="hidden sm:block md:hidden">
          <div className="py-3 space-y-3">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 flex-1 min-w-0">
                <div className="w-3 h-3 bg-green-500 rounded-full flex-shrink-0"></div>
                <div className="flex-1 min-w-0">
                  <span className="text-sm text-gray-600">
                    Bharat PIN:{" "}
                    <span className="font-mono font-semibold text-red-600">
                      {location.digiPin}
                    </span>
                  </span>
                </div>
                <CopyPinButton text={location.digiPin} />
              </div>
            </div>
            <div className="w-full">
              <PinSearchInput onSearch={onSearchLocation} />
            </div>
          </div>
        </div>

        {/* Desktop View - Large screens */}
        <div className="hidden md:block py-4">
          <div className="flex items-center justify-between gap-6">
            <div className="flex items-center gap-6 flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-shrink-0">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium text-gray-700 whitespace-nowrap">
                  Location Selected
                </span>
              </div>
              <div className="flex items-center gap-3 min-w-0">
                <span className="text-sm text-gray-600 truncate">
                  Bharat PIN:{" "}
                  <span className="font-mono font-semibold text-red-600">
                    {location.digiPin}
                  </span>
                </span>
                <CopyPinButton text={location.digiPin} />
                <button
                  onClick={onShare}
                  className="p-2 text-gray-500 hover:text-black hover:bg-gray-100 rounded-md transition-colors"
                  aria-label="Share Location"
                >
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="flex-shrink-0">
              <PinSearchInput onSearch={onSearchLocation} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
