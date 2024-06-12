import { BtnMyLocation, MapView, ReactLogo, SearchBar } from "../components";

export const HomeScreen = () => {
  return (
    <div className="relative">
      <BtnMyLocation />
      <MapView />
      <ReactLogo />
      <SearchBar />
    </div>
  );
};
