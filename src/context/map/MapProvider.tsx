import { Map, Marker, Popup } from "mapbox-gl";
import { useContext, useEffect, useReducer } from "react";
import { MapContext } from "./MapContext";
import { MapReducer } from "./MapReduce";
import { PlacesContext } from "../places/PlacesContext";

export interface MapState {
  isMapReady: boolean;
  map?: Map;
  markers?: Marker[];
}

const INITIAL_STATE: MapState = {
  isMapReady: false,
  map: undefined,
  markers: [],
};

type MapProps = { children: JSX.Element | JSX.Element[] };

export const MapProvider = ({ children }: MapProps) => {
  const [state, dispatch] = useReducer(MapReducer, INITIAL_STATE);
  const { places } = useContext(PlacesContext);

  useEffect(() => {
    state.markers?.forEach((marker) => marker.remove());
    const newMarkers: Marker[] = [];

    for (const place of places) {
      const [lng, lat] = place.geometry.coordinates;
      const popup = new Popup().setHTML(`
        <h6>${place.properties.name_preferred}</h6>
          <p>${place.properties.place_formatted}</p>
        `);

      const newMarker = new Marker()
        .setPopup(popup)
        .setLngLat([lng, lat])
        .addTo(state.map!);

      newMarkers.push(newMarker);

      dispatch({ type: "setMarkers", payload: newMarkers });
    }
  }, [places]);

  const setMap = (map: Map) => {
    const myLocationPopup = new Popup().setHTML(`
    <span>Aquí estoy</span>`);

    // Marcadores
    new Marker().setLngLat(map.getCenter()).setPopup(myLocationPopup).addTo(map);

    dispatch({ type: "setMap", payload: map });
  };

  return (
    <MapContext.Provider value={{ ...state, setMap }}>{children}</MapContext.Provider>
  );
};
