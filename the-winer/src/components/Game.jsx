import React, { useState, useEffect } from "react";
import Income from "./Income";
import ClickableCell from "./ClickableCell";
// import FilledCell from "./FilledCell";
import "./CSS/Game.css";

function Game() {
  const [gridData, setGridData] = useState([]);
  const [gain, setGain] = useState();
  useEffect(() => {
    setGain(1);
    setGridData([true, true, true, true, true, true, true]);
  }, []);

  return (
    <>
      <div className="gameboard">
        {gridData.map(
          (element) =>
            element && <ClickableCell index={gridData.indexOf(element)} />
        )}
      </div>
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
