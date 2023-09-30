import React, { useState } from "react";
import { Tabs, Tab, Box, Typography } from "@mui/material";

import FactorCalculator from "./factor/factor";
import FractionCalculator from "./fractions";
import FractionCalculatorsteps from "./fractionswithsteps";
import GCDCalculator from "./gcd/gcd";
import {
  HalfLifeCalculator,
  HalfLifeConversionCalculator
} from "./halflife/halflife";
import HexCalculator from "./hex/hex";
import LCMCalculator from "./lcm/lcm";
import LogCalculator from "./logarithm/logarithm";
//import MatrixCalculator from "./matrix/matrix";
import MixedNumberCalculator from "./mixednumbers";
import Percentage from "./percentage/percentage";
import PercentageChangeCalculator from "./percentage/percentagechange";
import PercentageDifferenceCalculator from "./percentage/percentagedifference";
import PercentErrorCalculator from "./percentage/percentageerror";
import Phrasepercentage from "./percentage/phrasepercentage";
import QuadraticFormulaCalculator from "./quadratic/quadratic";
import ComprehensiveRandomGenerator from "./randomnumber/comprehensiverandomnumber";
import RandomNumberGenerator from "./randomnumber/randomnumber";
import RatioCalculator from "./ratio/ratio";
import RootCalculator from "./root/root";
import RoundingCalculator from "./rounding/rounding";
import Calculator from "./scientificcalculator";
import SimplifyFractionsCalculator from "./simplifyfraction";
import "./styles.css";

const calculatorCategories = [
  {
    label: "Percentage Calculators",
    calculators: [
      { label: "Percentage Calculator", component: <RoundingCalculator /> },
      {
        label: "Phrase Percentage Calculator",
        component: <Phrasepercentage />
      },
      {
        label: "Percentage Change Calculator",
        component: <PercentageChangeCalculator />
      }
      // Add more percentage-related calculators here
    ]
  },
  {
    label: "Mathematical Calculators",
    calculators: [
      { label: "Factor Calculator", component: <FactorCalculator /> },
      {
        label: "Quadratic Formula Calculator",
        component: <QuadraticFormulaCalculator />
      }
      // Add more mathematical calculators here
    ]
  },
  {
    label: "Fraction Calculators",
    calculators: [
      { label: "Fraction Calculator", component: <FractionCalculator /> },
      {
        label: "Fraction Calculator with Steps",
        component: <FractionCalculatorsteps />
      },
      {
        label: "Simplify Fractions Calculator",
        component: <SimplifyFractionsCalculator />
      }
      // Add more fraction-related calculators here
    ]
  }
  // Add more calculator categories as needed
];

export default function Appreserve1() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="App">
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="calculator categories"
        >
          {calculatorCategories.map((category, index) => (
            <Tab key={index} label={category.label} {...a11yProps(index)} />
          ))}
        </Tabs>
      </Box>
      {calculatorCategories.map((category, index) => (
        <CustomTabPanel key={index} value={value} index={index}>
          <Typography variant="h5">{category.label}</Typography>
          <div className="calculator-list">
            {category.calculators.map((calculator, calcIndex) => (
              <div key={calcIndex} className="calculator-item">
                <Typography variant="h6">{calculator.label}</Typography>
                {calculator.component}
              </div>
            ))}
          </div>
        </CustomTabPanel>
      ))}
    </div>
  );
}

const a11yProps = (index) => {
  return {
    id: `tab-${index}`,
    "aria-controls": `tabpanel-${index}`
  };
};

const CustomTabPanel = ({ value, index, children }) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
    >
      {value === index && <div>{children}</div>}
    </div>
  );
};
