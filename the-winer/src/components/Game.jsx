import React, { useState, useEffect } from "react";
import Income from "./Income";
import ClickableCell from "./ClickableCell";
// import FilledCell from "./FilledCell";
import "./CSS/Game.css";

function Game() {
  const [gridData, setGridData] = useState([]);
  const [newValue, setNewValue] = useState("");
  const [grassCount, setGrassCount] = useState(0);
  const [gain, setGain] = useState();
  useEffect(() => {
    for (let x = 1; x <= 100; x += 1) {
      setGridData((prevGridData) => [...prevGridData, { id: x, fill: null }]);
    }
  }, []);

  useEffect(() => {
    setGain(5 + grassCount * 10);
  }, []);

  return (
    <>
      <div className="gameboard">
        {gridData.map((element) => (
          <ClickableCell
            key={element.id}
            fill={element.fill}
            grassCount={grassCount}
            setGrassCount={setGrassCount}
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
      <button type="button" className="button" onClick={() => setGain(5)}>
        {" "}
        test x5
      </button>
      <button type="button" className="button" onClick={() => setGain(25)}>
        test x25
      </button>
      <button type="button" className="button" onClick={() => setGain(500)}>
        test x500
      </button>
    </>
  );
}

export default Game;
