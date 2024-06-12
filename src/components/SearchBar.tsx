import { useContext, useRef } from "react";
import { PlacesContext } from "../context";
// Start of Selection

export const SearchBar = () => {
  const debouncedRef = useRef<ReturnType<typeof setTimeout>>();

  const { searchPlacesByTerm } = useContext(PlacesContext);

  const onQueryChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (debouncedRef.current) {
      clearTimeout(debouncedRef.current);
    }

    debouncedRef.current = setTimeout(() => {
      console.log(event.target.value);
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
    </div>
  );
};
