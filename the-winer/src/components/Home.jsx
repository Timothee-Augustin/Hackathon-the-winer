import React from "react";
import "./CSS/Home.css";

function Home() {
  return (
    <div className="definitionContainer">
      <h1>L&apos;Agroforesterie, qu&apos;est-ce que c&apos;est ?</h1>
      <p>
        L’agroforesterie est un mode d’exploitation des terres agricoles
        associant des arbres et des cultures ou de l&apos;élevage afin
        d&apos;obtenir des produits ou services utiles à l&apos;homme.
        L&apos;association (simultanée ou séquentielle) arbres et agriculture
        présente des avantages considérables, notamment dans le domaine de la
        protection des sols.
      </p>
      <img className="homeImg" src="https://i.imgur.com/4RP9DGq.jpg" alt="" />
    </div>
  );
}

export default Home;
