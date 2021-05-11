import React, { useState, useEffect } from "react";
import Income from "./Income";
import ClickableCell from "./ClickableCell";
// import FilledCell from "./FilledCell";
import "./CSS/Game.css";

function Game() {
  const [cell, setCell] = useState(false);
  //   const [gridData, setGridData] = useState(false);
  const [gain, setGain] = useState();
  useEffect(() => {
    setGain(1);
  }, []);

  return (
    <>
      <div className="gameboard">
        <div className="grid-element">1</div>
        <div className="grid-element">2</div>
        <div className="grid-element" id="a">
          3
        </div>
        <div className="grid-element" id="b">
          <ClickableCell cell={cell} setCell={setCell} />
        </div>
        <div className="grid-element" id="c">
          5
        </div>
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
