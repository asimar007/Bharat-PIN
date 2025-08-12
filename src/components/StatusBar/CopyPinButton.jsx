import { useState } from "react";
import { Copy, Check } from "lucide-react";

export default function CopyPinButton({ text }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch (error) {
      console.error("Failed to copy to clipboard:", error);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="px-3 py-2 bg-black text-white rounded-md text-sm flex gap-2 items-center hover:bg-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 min-h-[40px] touch-manipulation"
      aria-label={copied ? "PIN copied to clipboard" : "Copy PIN to clipboard"}
    >
      {copied ? (
        <>
          <Check className="w-4 h-4" />
          <span className="hidden xs:inline">Copied!</span>
        </>
      ) : (
        <>
          <Copy className="w-4 h-4" />
          {copied ? "Copied!" : "Quick Copy"}
        </>
      )}
    </button>
  );
}
