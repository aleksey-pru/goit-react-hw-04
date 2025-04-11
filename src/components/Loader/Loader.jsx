import { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";
const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};
const Loader = () => {
  let [color, setColor] = useState("#ffffff");
  return (
    <ClipLoader
      color={color}
      cssOverride={override}
      size={150}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

export default Loader;
