import axios from "axios";

const searchApi = axios.create({
  baseURL: "https://api.mapbox.com/search/geocode/v6",
  params: {
    limit: 5,
    language: "es",
    access_token:
      "pk.eyJ1Ijoia2hhbGVzdCIsImEiOiJjbHg2dGw5d28xcXRvMmpvbTU0bDU5bHp5In0.iUKAoGHnJKasrwChSawdmg",
  },
});

export default searchApi;
