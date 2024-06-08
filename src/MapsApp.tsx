import { PlacesProvider } from "./context";
import { HomeScreen } from "./screens";

import "./styles.css";

export const MapApp = () => {
  return (
    <PlacesProvider>
      <HomeScreen />
    </PlacesProvider>
  );
};
