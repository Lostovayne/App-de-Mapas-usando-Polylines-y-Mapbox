import { useContext, useRef } from "react";
import { PlacesContext } from "../context";
import { SearchResults } from "./SearchResults";

// Start of Selection
export const SearchBar = () => {
  const debouncedRef = useRef<ReturnType<typeof setTimeout>>();

  const { searchPlacesByTerm } = useContext(PlacesContext);

  const onQueryChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (debouncedRef.current) {
      clearTimeout(debouncedRef.current);
    }

    debouncedRef.current = setTimeout(() => {
      searchPlacesByTerm(event.target.value);
    }, 500);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        className="form-control"
        placeholder="Buscar dirección..."
        onChange={onQueryChanged}
      />
      {debouncedRef.current && <SearchResults />}
    </div>
  );
};
