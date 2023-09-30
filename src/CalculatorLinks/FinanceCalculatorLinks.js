// FinanceCalculatorLinks.js
import React from "react";
import { Link } from "react-router-dom";

const FinanceCalculatorLinks = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/finance/calculator1">Calculator 1</Link>
        </li>
        <li>
          <Link to="/finance/calculator2">Calculator 2</Link>
        </li>
        {/* Add more calculator links */}
      </ul>
    </div>
  );
};

export default FinanceCalculatorLinks;
