// MathCalculatorLinks.js
import React from "react";
import { Link } from "react-router-dom";

const MathCalculatorLinks = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/math/calculator1">Calculator 1</Link>
        </li>
        <li>
          <Link to="/math/calculator2">Calculator 2</Link>
        </li>
        {/* Add more calculator links */}
      </ul>
    </div>
  );
};

export default MathCalculatorLinks;
