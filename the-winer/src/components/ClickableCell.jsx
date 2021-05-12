import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "./CSS/ClickableCell.css";

function ClickableCell({ fill, updateCell, bonusCount, setBonusCount }) {
  let fillClass = "grid-element";

  if (fill === "grass") {
    fillClass += " grassClass ";
    useEffect(() => {
      setBonusCount(bonusCount + 10);
    }, []);
  }
  if (fill === "tree") {
    fillClass += " treeClass";
    useEffect(() => {
      setBonusCount(bonusCount + 150);
    }, []);
  }
  if (fill === "hive") {
    fillClass += " hiveClass";
    useEffect(() => {
      setBonusCount(bonusCount + 25);
    }, []);
  }

  return (
    <>
      <button
        id="grid"
        className={fillClass}
        type="button"
        onClick={updateCell}
      >
        {" "}
      </button>
    </>
  );
}

ClickableCell.propTypes = {
  fill: PropTypes.string,
  updateCell: PropTypes.func.isRequired,
  bonusCount: PropTypes.number.isRequired,
  setBonusCount: PropTypes.func.isRequired,
};

ClickableCell.defaultProps = {
  fill: null,
};

export default ClickableCell;
