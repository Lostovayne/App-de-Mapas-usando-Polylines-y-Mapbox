import { MapProvider, PlacesProvider } from "./context";
import { HomeScreen } from "./screens";

import "./styles.css";

export const MapApp = () => {
  return (
    <PlacesProvider>
      <MapProvider>
        <HomeScreen />
      </MapProvider>
    </PlacesProvider>
  );
};
