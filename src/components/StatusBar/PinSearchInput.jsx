import { useState } from "react";
import { Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getLatLngFromDigiPin } from "../../utils/digipin";

export default function PinSearchInput({ onSearch }) {
  const [searchPin, setSearchPin] = useState("");
  const [error, setError] = useState("");

  const handleSearch = () => {
    setError("");
    if (!searchPin.trim()) {
      setError("Please enter a Bharat PIN");
      return;
    }

    try {
      const coords = getLatLngFromDigiPin(searchPin.trim());
      onSearch({
        lat: parseFloat(coords.latitude),
        lng: parseFloat(coords.longitude),
        digiPin: searchPin.trim(),
      });
      setSearchPin("");
    } catch (err) {
      console.error("Search error:", err);
      setError("Invalid Bharat PIN format");
    }
  };

  const handleClear = () => {
    setSearchPin("");
    setError("");
  };

  return (
    <div className="flex flex-col w-full">
      <div className="flex items-stretch gap-2">
        <div className="relative flex-1">
          <Input
            type="text"
            value={searchPin}
            onChange={(e) => setSearchPin(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            placeholder="Enter Bharat PIN"
            className="border-2 border-black text-black min-h-[40px] touch-manipulation"
            maxLength={13}
            aria-label="Search by Bharat PIN"
          />
          {searchPin && (
            <Button
              variant="ghost"
              size="sm"
              onClick={handleClear}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white hover:text-black p-1 h-auto w-auto"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </Button>
          )}
        </div>
        <Button
          onClick={handleSearch}
          className="px-3 py-1.5 bg-black text-white rounded-md text-sm flex gap-2 items-center min-h-[40px] touch-manipulation hover:bg-black hover:text-white"
          aria-label="Find Location by Bharat PIN"
        >
          <Search className="w-4 h-4" />
          <span className="hidden sm:inline">Find</span>
        </Button>
      </div>
      {error && (
        <div className="text-xs text-red-500 mt-2 px-1 flex items-center gap-1">
          <span className="w-1 h-1 bg-red-500 rounded-full flex-shrink-0"></span>
          {error}
        </div>
      )}
    </div>
  );
}
