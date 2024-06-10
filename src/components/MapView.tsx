import { Map } from "mapbox-gl";
import { useContext, useEffect, useRef } from "react";
import { MapContext, PlacesContext } from "../context";
import { Loading } from "./Loading";

export const MapView = () => {
  const { isLoading, userLocation } = useContext(PlacesContext);
  const mapDiv = useRef<HTMLDivElement>(null);
  const { setMap } = useContext(MapContext);

  useEffect(() => {
    if (!isLoading) {
      const map = new Map({
        container: mapDiv.current!,
        style: "mapbox://styles/mapbox/streets-v11",
        center: userLocation,
        zoom: 14,
      });
      setMap(map);
    }
  },[ isLoading, userLocation ]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div
      ref={mapDiv}
      style={{
        height: "100vh",
        width: "100vw",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
      }}
    >
      {userLocation?.join(",")}
    </div>
  );
};
