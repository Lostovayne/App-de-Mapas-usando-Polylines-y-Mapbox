import { useRef } from "react";
// Start of Selection

export const SearchBar = () => {
  const debouncedRef = useRef<ReturnType<typeof setTimeout>>();

  const onQueryChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (debouncedRef.current) {
      clearTimeout(debouncedRef.current);
    }

    debouncedRef.current = setTimeout(() => {
      console.log(event.target.value);
    }, 350);
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
