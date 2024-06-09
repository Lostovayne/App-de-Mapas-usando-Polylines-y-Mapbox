import { MapState } from "./MapProvider";
import { Map } from "mapbox-gl";

type MapAction = { type: "setMap"; payload: Map };

export const MapReducer = (state: MapState, action: MapAction): MapState => {
  switch (action.type) {
    case "setMap":
      return {
        ...state,
        isMapReady: true,
        map: action.payload,
      };

    default:
      return state;
  }
};
