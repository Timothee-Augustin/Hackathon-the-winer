import React, { useState, useEffect } from "react";
import Income from "./Income";
import "./CSS/Game.css";

function Game() {
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
          4
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
