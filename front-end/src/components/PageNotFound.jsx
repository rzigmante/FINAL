import image from "./assets/image.png";
import { Link } from "react-router-dom";

export const PageNotFound = () => {
  return (
    <div
      style={{
        margin: "50px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "lightblue",
      }}
    >
      <img src={image} alt="sinking boat" />
      <h2>Oooops, you're probably lost</h2>
      <h4>
        We're afraid there is nothing here. Please go back to our main page{" "}
        <Link style={{ color: "lightblue" }} to="/">
          HERE
        </Link>
      </h4>
    </div>
  );
};
