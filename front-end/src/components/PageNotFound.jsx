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
        color: "darkgreen",
      }}
    >
      <img src={image} alt="sinking boat" />
      <h2>Uuuuuups, tikriausiai pasiklydote</h2>
      <h4>
        Čia nieko nėra. Grįžkite į mūsų pagrindinį puslapį{" "}
        <Link style={{ color: "darkgreen" }} to="/">
          ČIA
        </Link>
      </h4>
    </div>
  );
};
