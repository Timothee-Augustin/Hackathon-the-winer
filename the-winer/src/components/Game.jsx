import React, { useState, useEffect } from "react";
import Income from "./Income";
import ClickableCell from "./ClickableCell";
// import FilledCell from "./FilledCell";
import "./CSS/Game.css";

function Game() {
  const [gridData, setGridData] = useState([]);
  const [newValue, setNewValue] = useState("");
  const [bonusCount, setBonusCount] = useState(0);
  const [gain, setGain] = useState();
  useEffect(() => {
    for (let x = 1; x <= 100; x += 1) {
      setGridData((prevGridData) => [...prevGridData, { id: x, fill: null }]);
    }
  }, []);

  useEffect(() => {
    setGain(5 + bonusCount);
  }, [bonusCount]);

  return (
    <>
      <div>
        <button
          className="rules"
          type="button"
          onClick={() => {
            alert(
              "Règles du jeu :\n Vous devez compléter le jeu pour gagner une place à une dégustation de champagne. Vous serez amené en début de partie à traiter les vignes de manière chimique, cependant vous constaterez que cela coûte cher et que l'agroforestation est plus avantageuse pour votre budget ainsi que pour la planète.\n Vous débloquerez des éléments vous permettant de la pratiquer en passant des niveaux. Ce sera à vous de choisir de manière stratégique ce que vous souhaitez faire pour augmenter le rendement des vignes déjà présentes."
            );
          }}
        >
          Règles
        </button>
      </div>

      <div className="gameboard">
        {gridData.map((element) => (
          <ClickableCell
            key={element.id}
            fill={element.fill}
            bonusCount={bonusCount}
            setBonusCount={setBonusCount}
            updateCell={() => {
              setGridData(
                gridData.map((cell) => {
                  if (cell.id !== element.id) {
                    return cell;
                  }

                  return { ...cell, fill: newValue };
                })
              );
            }}
          />
        ))}
      </div>
      <button
        type="button"
        className="button"
        onClick={() => setNewValue("grass")}
      >
        Herbe
      </button>
      <button
        type="button"
        className="button"
        onClick={() => setNewValue("tree")}
      >
        Arbres
      </button>
      <button
        type="button"
        className="button"
        onClick={() => setNewValue("hive")}
      >
        Ruche
      </button>
      {gain && <Income gain={gain} />}
    </>
  );
}

export default Game;
