import { BtnMyLocation, MapView,ReactLogo } from "../components";

export const HomeScreen = () => {
  return (
    <div className="relative">
      <BtnMyLocation />
      <MapView />
      <ReactLogo />
    </div>
  );
};
