import React from "react";
import ReactDOM from "react-dom/client";
import { MapApp } from "./MapsApp.tsx";

if (!navigator.geolocation) {
  alert("Tu navegador no soporta la geolocalización");
  throw new Error("Tu navegador no soporta la geolocalización");
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MapApp />
  </React.StrictMode>
);
