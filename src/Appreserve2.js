import React, { useState, useEffect } from "react";
import {
  Tabs,
  Tab,
  Box,
  Select,
  MenuItem,
  Container,
  Typography
} from "@mui/material";
import RoundingCalculator from "./Math/rounding/rounding";
import FactorCalculator from "./factor/factor";
import PercentageChangeCalculator from "./percentage/percentagechange";
//import "./styles.css";
import Percentage from "./percentage/percentage";
import Phrasepercentage from "./percentage/phrasepercentage";
import PercentageDifferenceCalculator from "./percentage/percentagedifference";
import Calculator from "./scientificcalculator";
import FractionCalculator from "./fractions/fractions";
import BinaryCalculator from "./binary/binary";
import ExponentCalculator from "./exponent/exponent";
import FractionStepCalculator from "./fractions/fractionswithsteps";
import FractionSimplifyCalculator from "./fractions/simplifyfraction";
import GCDCalculator from "./gcd/gcd";
import { HalfLifeCalculator } from "./halflife/halflife";
import HexCalculator from "./hex/hex";
import LogCalculator from "./logarithm/logarithm";
import QuadraticFormulaCalculator from "./quadratic/quadratic";
import ComprehensiveRandomGenerator from "./randomnumber/comprehensiverandomnumber";
import RatioCalculator from "./ratio/ratio";
import RootCalculator from "./root/root";
import BigFractionCalculator from "./fractions/bignumberfraction";
import DecimalToFractionCalculator from "./fractions/decimaltofraction";
import MortgageCalculator from "./Finance/mortgage";
import AmortizedLoanCalculator from "./amortizedloan";
import DeferredPaymentLoanCalculator from "./defferedloan";
import BondCalculator from "./loanbond";
import AmortizationCalculator from "./amortization";

const calculatorComponents = [
  { label: "Calculators", component: <Calculator /> },
  { label: "Bond", component: <BondCalculator /> },
  { label: "Amortization Calculator", component: <AmortizationCalculator /> },
  { label: "Scientific Calculator", component: <AmortizedLoanCalculator /> },
  {
    label: "Deffered Loan Calculator",
    component: <DeferredPaymentLoanCalculator />
  },
  { label: "Scientific Calculator", component: <Calculator /> },
  { label: "Binary Calculator", component: <BinaryCalculator /> },
  { label: "Exponent Calculator", component: <ExponentCalculator /> },
  { label: "Factor Calculator", component: <FactorCalculator /> },
  //{ label: "Fraction Calculator", component: <FractionCalculator /> },
  {
    label: "Fracction steps Calculator",
    component: <FractionStepCalculator />
  },
  {
    label: "Mixed Fractions Calculator",
    component: <FractionSimplifyCalculator />
  },
  { label: "GCD Calculator", component: <GCDCalculator /> },
  { label: "Halflife Calculator", component: <HalfLifeCalculator /> },
  { label: "Hex Calculator", component: <HexCalculator /> },
  { label: "LCM Calculator", component: <PercentageChangeCalculator /> },
  { label: "LOG Calculator", component: <LogCalculator /> },
  { label: "Quadratic Calculator", component: <QuadraticFormulaCalculator /> },
  {
    label: "Comperehensive Random Number Calculator",
    component: <ComprehensiveRandomGenerator />
  },
  {
    label: "Decimal To Fractions",
    component: <DecimalToFractionCalculator />
  },
  { label: "Ratio Calculator", component: <RatioCalculator /> },
  { label: "Root Calculator", component: <RootCalculator /> },
  { label: "Rounding Calculator", component: <RoundingCalculator /> },
  { label: "Big fraction Calculator", component: <BigFractionCalculator /> },
  { label: "Phrase Percentage Calculator", component: <Phrasepercentage /> },
  {
    label: "Percentage Change Calculator",
    component: <PercentageChangeCalculator />
  },
  // Add more calculators in a similar format
  {
    label: "Percentage Difference Calculator",
    component: <PercentageDifferenceCalculator />
  },
  {
    label: "Mortgage Calculator",
    component: <MortgageCalculator />
  }
];

export default function AppR() {
  const [value, setValue] = useState(0);
  const [selectedCalculator, setSelectedCalculator] = useState(
    calculatorComponents[0].component
  );

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
    setSelectedCalculator(calculatorComponents[newValue].component);
  };

  const handleCalculatorChange = (event) => {
    const selectedCalculatorIndex = event.target.value;
    setSelectedCalculator(
      calculatorComponents[selectedCalculatorIndex].component
    );
  };

  useEffect(() => {
    setSelectedCalculator(calculatorComponents[value].component);
  }, [value]);

  return (
    <Container maxWidth="md">
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleTabChange}
          aria-label="calculator tabs"
        >
          <Tab label="Math" {...a11yProps(0)} />
          <Tab label="Finance" {...a11yProps(1)} />
        </Tabs>
      </Box>
      {value === 0 && (
        <Box sx={{ paddingLeft: 2, paddingTop: 2 }}>
          <Typography variant="subtitle1" gutterBottom>
            Select A Math Calculator
          </Typography>
          <Select
            value={0} // Always select the first calculator
            onChange={handleCalculatorChange}
          >
            {calculatorComponents.map((calculator, index) => (
              <MenuItem key={index} value={index}>
                {calculator.label}
              </MenuItem>
            ))}
          </Select>
        </Box>
      )}

      <Container sx={{ marginTop: 2 }}>{selectedCalculator}</Container>
    </Container>
  );
}

const a11yProps = (index) => {
  return {
    id: `tab-${index}`,
    "aria-controls": `tabpanel-${index}`
  };
};
