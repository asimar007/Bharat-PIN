import React, { useState } from "react";
import QRCode from "react-qr-code";
import { Copy, Share2, Twitter, X, Check } from "lucide-react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "./ui/card";

export default function ShareModal({ isOpen, onClose, location }) {
  const [isCopied, setIsCopied] = useState(false);

  if (!isOpen || !location) return null;

  const appUrl = window.location.origin;
  const shareUrl = `${appUrl}/map?pin=${location.digiPin}`;
  const shareText = `Find my location on Bharat Pin: ${location.digiPin}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareUrl);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const shareOnWhatsApp = () => {
    const url = `https://wa.me/?text=${encodeURIComponent(
      shareText + " " + shareUrl
    )}`;
    window.open(url, "_blank");
  };

  const shareOnTwitter = () => {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      shareText
    )}&url=${encodeURIComponent(shareUrl)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="relative w-full max-w-md">
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-2 z-10 text-gray-500 hover:text-black bg-white/50 hover:bg-white rounded-full transition-colors"
          onClick={onClose}
        >
          <X className="h-4 w-4" />
        </Button>
        <Card className="w-full shadow-2xl border-2 border-black/5">
          <CardHeader className="text-center pb-2">
            <CardTitle className="text-2xl font-bold tracking-tight">
              Share Location
            </CardTitle>
            <CardDescription className="text-base text-gray-600">
              Scan to view this location on Bharat Pin
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center gap-6 pt-4">
            <div className="p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
              <QRCode
                value={shareUrl}
                size={180}
                style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                viewBox={`0 0 256 256`}
              />
            </div>

            <div className="text-center space-y-2">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest">
                Bharat PIN
              </p>
              <div className="inline-block px-4 py-1.5 bg-black text-white rounded-lg font-mono text-2xl font-bold tracking-wider">
                {location.digiPin}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 w-full mt-2">
              <Button
                onClick={copyToClipboard}
                variant="outline"
                className="flex items-center gap-2 border-2 h-11 hover:bg-gray-50 hover:text-black transition-all"
              >
                {isCopied ? (
                  <Check className="w-4 h-4" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
                {isCopied ? "Copied" : "Copy Link"}
              </Button>
              <Button
                onClick={shareOnWhatsApp}
                className="bg-black hover:bg-gray-800 text-white flex items-center gap-2 h-11 transition-all"
              >
                <Share2 className="w-4 h-4" />
                WhatsApp
              </Button>
              <Button
                onClick={shareOnTwitter}
                variant="outline"
                className="col-span-2 border-2 h-11 hover:bg-gray-50 hover:text-black transition-all flex items-center gap-2"
              >
                <Twitter className="w-4 h-4" />
                Share on X
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
