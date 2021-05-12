import React from "react";
import "./CSS/Home.css";
import agro from "./assets/agroforesterie.png";

function Home() {
  return (
    <div className="definitionContainer">
      <h1>L&apos;Agroforesterie, qu&apos;est-ce que c&apos;est ?</h1>
      <p>
        L’agroforesterie est l&apos;association d&apos;arbres, de cultures ou
        d&apos;animaux sur une même parcelle. Cela permet une meilleure
        utilisation des ressources et donc une augmentation des rendements ainsi
        qu&apos;une plus grande diversité biologique. C&apos;est également très
        utile lorsqu&apos;on est vigneron, étant donné que cela permet de
        produire du champagne tout en sauvant la planète, les paysages sont
        égalements plus agréables étant donné qu&apos;un micro-climat se créé
        autour du chemin de vigne. Afin de mettre ces techniques en avant, nous
        avons élaboré un mini jeu que vous découvrirez en cliquant sur le bouton
        &quot;jouer&quot; !
      </p>
      <img className="homeImg" src={agro} alt="" />
    </div>
  );
}

export default Home;
