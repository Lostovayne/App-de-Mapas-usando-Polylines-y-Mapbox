import React from "react";
import ReactDOM from "react-dom/client";
import { MapApp } from "./MapsApp.tsx";
import mapboxgl from "mapbox-gl"; // or "const mapboxgl = require('mapbox-gl');"

mapboxgl.accessToken =
  "pk.eyJ1Ijoia2hhbGVzdCIsImEiOiJjbHg2dGw5d28xcXRvMmpvbTU0bDU5bHp5In0.iUKAoGHnJKasrwChSawdmg";

if (!navigator.geolocation) {
  alert("Tu navegador no soporta la geolocalización");
  throw new Error("Tu navegador no soporta la geolocalización");
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MapApp />
  </React.StrictMode>
);
