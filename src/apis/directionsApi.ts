import axios from "axios";

const directionApi = axios.create({
  baseURL: "https://api.mapbox.com/directions/v5/mapbox/driving",
  params: {
    alternatives: false,
    geometries: "geojson",
    language: "es",
    overview: "simplified",
    steps: true,
    access_token: import.meta.env.VITE_TOKEN,
  },
});

export default directionApi;
