import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

function Income({ gain }) {
  const [income, SetIncome] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      SetIncome((prevState) => prevState + gain);
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, [gain]);

  return <h1>{income} €</h1>;
}

Income.propTypes = {
  gain: PropTypes.number.isRequired,
};

export default Income;
