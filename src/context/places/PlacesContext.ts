import { createContext } from "react";

export interface PlacesContextProps {
  isLoading: boolean;
  userLocation?: [number, number];
  //methods
  searchPlacesByTerm: (query: string) => Promise<unknown>;
}

export const PlacesContext = createContext({} as PlacesContextProps);
