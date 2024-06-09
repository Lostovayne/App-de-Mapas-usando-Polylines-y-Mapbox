import { Map } from "mapbox-gl";
import { useReducer } from "react";
import { MapContext } from "./MapContext";
import { MapReducer } from "./MapReduce";

export interface MapState {
  isMapReady: boolean;
  map?: Map;
}

const INITIAL_STATE: MapState = {
  isMapReady: false,
  map: undefined,
};

type MapProps = { children: JSX.Element | JSX.Element[] };

export const MapProvider = ({ children }: MapProps) => {
  const [state, dispatch] = useReducer(MapReducer, INITIAL_STATE);

  const setMap = (map: Map) => {
    dispatch({ type: "setMap", payload: map });
  };

  return (
    <MapContext.Provider value={{ ...state, setMap }}>{children}</MapContext.Provider>
  );
};
