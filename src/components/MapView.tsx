import { useContext, useLayoutEffect, useRef } from "react";
import { PlacesContext } from "../context";
import { Loading } from "./Loading";
import { Map } from "mapbox-gl";

export const MapView = () => {
  const { isLoading, userLocation } = useContext(PlacesContext);
  const mapDiv = useRef<HTMLDivElement>(null);

  if (isLoading) {
    return <Loading />;
  }

  console.log(userLocation);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useLayoutEffect(() => {
    if (!isLoading) {
      const map = new Map({
        container: mapDiv.current!, // container ID
        style: "mapbox://styles/mapbox/streets-v12", // style URL
        center: userLocation, // starting position [lng, lat]
        zoom: 9, // starting zoom
      });
    }

    return () => {};
  }, [isLoading]);

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
