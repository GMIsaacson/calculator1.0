import React, { useState, useEffect } from "react";

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Container,
  List,
  ListItem,
  ListItemText,
  Grid
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styled from "styled-components";

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
import MortgagePayoffCalculator from "./mortgagepayoff";
import RemainingLoanTermCalculator from "./remainingmortgagepayoff";
import HouseAffordabilityCalculator from "./houseaffordability";
import HouseAffordabilityFixedBudgetCalculator from "./houseaffordabilityfixed";
import RentCalculator from "./financerentcalculator";
import DtiCalculator from "./financedebttoincomeratio";
import RefinanceCalculator from "./refinance";
import RentalPropertyCalculator from "./rentalproperty";
import AprCalculator from "./apr";
import FhaLoanCalculator from "./fha";
import VAMortgageCalculator from "./vamortgage";
import DownPaymentCalculator from "./downpayment";
import HomePriceCalculator from "./downpaymenthomeprice";
import DownPaymentPercentageCalculator from "./downpaymenthomeupfrontcash";
import RentVsBuyCalculator from "./rentvsbuy";
import AutoLoanCalculator from "./autoloan";

const StyledRoot = styled.div`
  display: flex;
  min-height: 100vh;
`;

const StyledContent = styled.div`
  display: flex;
  flex: 1;
`;

const StyledAccordion = styled.div`
  flex: 1;
  max-width: 300px;
  margin-right: 20px;
`;

const StyledSelectedCalculator = styled.div`
  flex: 1;
`;

const calculatorCategories = [
  {
    category: "Math",
    calculators: [
      {
        label: "Scientific Calculator",
        component: <Calculator />
      },
      {
        label: "Rental Property Calculator",
        component: <RentalPropertyCalculator />
      },
      { label: "Factor Calculator", component: <FactorCalculator /> },
      {
        label: "Rent Vs Buy Calculator",
        component: <RentVsBuyCalculator />
      }
      /* Add other Math calculators here */
    ]
  },
  {
    category: "Finance",
    calculators: [
      {
        label: "Downpayment price upfront cash Calculator",
        component: <DownPaymentPercentageCalculator />
      },
      {
        label: "Auto Loan Calculator",
        component: <AutoLoanCalculator />
      },
      {
        label: "Downpayment Homeprice Calculator",
        component: <HomePriceCalculator />
      },
      { label: "Apr Calculator", component: <AprCalculator /> },
      {
        label: "Down Payment Calculator",
        component: <DownPaymentCalculator />
      },

      { label: "FHA Loan Calculator", component: <FhaLoanCalculator /> },
      { label: "Mortgage Calculator", component: <MortgageCalculator /> }

      /* Add other Finance calculators here */
    ]
  }
];

export default function AppR() {
  const [selectedCalculator, setSelectedCalculator] = useState(null);

  const handleCalculatorChange = (calculatorComponent) => {
    setSelectedCalculator(calculatorComponent);
  };

  useEffect(() => {
    // Set the selected calculator when the page loads
    handleCalculatorChange(calculatorCategories[0].calculators[0].component);
  }, []);

  return (
    <StyledRoot>
      <Container maxWidth="lg">
        <Grid container spacing={1} className={StyledContent}>
          <Grid item xs={12} md={3} className={StyledAccordion}>
            {calculatorCategories.map((category, index) => (
              <Accordion key={index}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>{category.category}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <List>
                    {category.calculators.map((calculator, index) => (
                      <ListItem
                        key={index}
                        button
                        onClick={() =>
                          handleCalculatorChange(calculator.component)
                        }
                      >
                        <ListItemText primary={calculator.label} />
                      </ListItem>
                    ))}
                  </List>
                </AccordionDetails>
              </Accordion>
            ))}
          </Grid>
          <Grid item xs={12} md={8} className={StyledSelectedCalculator}>
            <Container>{selectedCalculator}</Container>
          </Grid>
        </Grid>
      </Container>
    </StyledRoot>
  );
}
