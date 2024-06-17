import { useContext, useState } from "react";
import { MapContext, PlacesContext } from "../context";
import { Feature } from "../interfaces/places";

export const SearchResults = () => {
  const { places, isLoadingPlaces, userLocation } = useContext(PlacesContext);
  const { map, getRouteBetweenPoints } = useContext(MapContext);

  const [activeId, setActiveId] = useState<string>("");

  const onPlaceClicked = (place: Feature) => {
    const [lng, lat] = place.geometry.coordinates;

    map?.flyTo({
      zoom: 14,
      center: [lng, lat],
    });
    setActiveId(place.id);
  };

  const getRoute = (place: Feature) => {
    if (!userLocation) return;
    const [lng, lat] = place.geometry.coordinates;
    getRouteBetweenPoints(userLocation, [lng, lat]);

    
  };

  return (
    <ul className="list-group mt-3 p-1">
      {isLoadingPlaces ? (
        <li className="list-group-item">Cargando...</li>
      ) : (
        places.map((place) => (
          <li
            key={place.id}
            className={`list-group px-4 py-2 list-group-item-action pointer ${
              activeId === place.id ? "active" : ""
            }`}
            onClick={() => onPlaceClicked(place)}
          >
            <h6>{place.properties.name_preferred}</h6>

            <p
              className="text-muted"
              style={{
                fontSize: "12px",
              }}
            >
              {place.properties.place_formatted}
            </p>
            <button
              onClick={() => getRoute(place)}
              className={`btn   btn-sm ${
                activeId === place.id ? "btn-outline-light" : "btn-outline-primary"
              } `}
            >
              Direcciones
            </button>
          </li>
        ))
      )}
    </ul>
  );
};
