import { useContext } from "react";
import { PlacesContext } from "../context";

export const SearchResults = () => {
  const { places, isLoadingPlaces } = useContext(PlacesContext);

  return (
    <ul className="list-group mt-3 p-1">
      {isLoadingPlaces ? (
        <li className="list-group-item">Cargando...</li>
      ) : (
        places.map((place) => (
          <li key={place.id} className="list-group px-4 py-2 list-group-item-action pointer">
            <h6>{place.properties.name_preferred}</h6>
            <p
              className="text-muted"
              style={{
                fontSize: "12px",
              }}
            >
              {place.properties.place_formatted}
            </p>
            <button className="btn  btn-outline-primary btn-sm">Direcciones</button>
          </li>
        ))
      )}
    </ul>
  );
};
