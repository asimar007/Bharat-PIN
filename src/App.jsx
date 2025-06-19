import "./utils/leafletIconFix";
import "leaflet/dist/leaflet.css";
import MapPage from "./pages/MapPage";
import HomePage from "./pages/HomePage";
import { ThemeProvider } from "@/components/theme-provider";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/map" element={<MapPage />} />
      </Routes>
    </ThemeProvider>
  );
}
