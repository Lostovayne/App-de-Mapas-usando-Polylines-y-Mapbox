import { createContext } from "react";
import { Feature } from "../../interfaces/places";

export interface PlacesContextProps {
  isLoading: boolean;
  userLocation?: [number, number];
  isLoadingPlaces: boolean;
  places: Feature[];
  // destination: [];
  //methods
  searchPlacesByTerm: (query: string) => Promise<Feature[]>;
  // setDataDestination: (data: { kms: string; minutes: string }) => void;
}

export const PlacesContext = createContext({} as PlacesContextProps);
