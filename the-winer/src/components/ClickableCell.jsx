import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "./CSS/ClickableCell.css";

function ClickableCell({ fill, updateCell, grassCount, setGrassCount }) {
  let fillClass = "grid-element";

  if (fill === "grass") {
    fillClass += " grassClass active";
    useEffect(() => {
      setGrassCount(grassCount + 1);
    }, []);
  }
  if (fill === "tree") {
    fillClass += " treeClass";
  }
  if (fill === "hive") {
    fillClass += " hiveClass";
  }

  return (
    <button id="grid" className={fillClass} type="button" onClick={updateCell}>
      {" "}
    </button>
  );
}

ClickableCell.propTypes = {
  fill: PropTypes.string,
  updateCell: PropTypes.func.isRequired,
  grassCount: PropTypes.number.isRequired,
  setGrassCount: PropTypes.func.isRequired,
};

ClickableCell.defaultProps = {
  fill: null,
};

export default ClickableCell;
