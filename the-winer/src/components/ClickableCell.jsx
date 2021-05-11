import React from "react";
import PropTypes from "prop-types";
import "./CSS/Game.css";

function ClickableCell({ setCell, cell }) {
  function fillCell() {
    setCell(true);
  }
  if (cell === true) {
    return <h1>Hello World</h1>;
  }
  return (
    <div
      id="menfou"
      type="button"
      role="button"
      tabIndex="-1"
      onKeyDown={fillCell}
      onClick={fillCell}
    >
      1{" "}
    </div>
  );
}

ClickableCell.propTypes = {
  setCell: PropTypes.func.isRequired,
  cell: PropTypes.bool.isRequired,
};

export default ClickableCell;
