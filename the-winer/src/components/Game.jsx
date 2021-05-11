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
        Grass
      </button>
      <button
        type="button"
        className="button"
        onClick={() => setNewValue("tree")}
      >
        Tree
      </button>
      <button
        type="button"
        className="button"
        onClick={() => setNewValue("hive")}
      >
        Hive
      </button>
      {gain && <Income gain={gain} />}
    </>
  );
}

export default Game;
