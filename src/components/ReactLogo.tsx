import logo from "../assets/react.svg";

export const ReactLogo = () => {
  return (
    <img
      src={logo}
      alt="React logo"
      className="animate__animated animate__fadeIn"
      width={50}
      height={50}
      style={{ position: "fixed", bottom: "20px", right: "20px", zIndex: 999 }}
    />
  );
};
