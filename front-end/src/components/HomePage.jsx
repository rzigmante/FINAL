import React from "react";
import background from "../components/assets/4391.jpg";

export const HomePage = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        width: "100%",
        height: "auto",
      }}
    >
      <h2 style={{ color: "limegreen" }}>
        Jūs esate finalinio projekto puslapyje
      </h2>
    </div>
  );
};

export const Homepage = () => {
  return (
    <div
      style={{
        margin: "50px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "darkgreen",
        position: "relative",
      }}
    ></div>
  );
};
