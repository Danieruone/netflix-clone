import React from "react";

import { Hero } from "./styles";

export const Main = () => {
  return (
    <Hero>
      <div className="desc-container">
        <img src="../images/rm-logo.png" />
        <p>
          Tienes un asiento de copiloto en las aventuras intergalácticas e
          irreverentes de Rick, un científico loco sin pelos en la lengua, y
          Morty, su nieto.
        </p>
        <div className="btn-container">
          <button className="play-btn">Reproducir</button>
          <button className=" play-btn info-btn">Más Información</button>
        </div>
      </div>
    </Hero>
  );
};
