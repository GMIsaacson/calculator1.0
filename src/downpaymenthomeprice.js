import React, { useState } from "react";
import "./Calculator.css";

const HomePriceCalculator = () => {
  const [homePrice, setHomePrice] = useState("");
  const [downPayment, setDownPayment] = useState("");
  const [includeClosingCosts, setIncludeClosingCosts] = useState(false);
  const [closingCosts, setClosingCosts] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanTerm, setLoanTerm] = useState("");
  const [cashNeeded, setCashNeeded] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState("");

  const calculateCashNeeded = () => {
    const homePriceValue = parseFloat(homePrice);
    const downPaymentValue = parseFloat(downPayment);
    const closingCostsValue = includeClosingCosts
      ? parseFloat(closingCosts)
      : 0;
    const cashNeededValue = downPaymentValue + closingCostsValue;
    const loanAmountValue = homePriceValue - downPaymentValue;
    const rate = parseFloat(interestRate) / 100 / 12; // Monthly interest rate
    const termInMonths = parseFloat(loanTerm) * 12; // Term in months
    const monthlyPaymentValue =
      (loanAmountValue * rate) / (1 - Math.pow(1 + rate, -termInMonths));

    setCashNeeded(cashNeededValue.toFixed(2));
    setLoanAmount(loanAmountValue.toFixed(2));
    setMonthlyPayment(monthlyPaymentValue.toFixed(2));
  };

  const clearFields = () => {
    setHomePrice("");
    setDownPayment("");
    setIncludeClosingCosts(false);
    setClosingCosts("");
    setInterestRate("");
    setLoanTerm("");
    setCashNeeded("");
    setLoanAmount("");
    setMonthlyPayment("");
  };

  return (
    <div className="App">
      <div className="calculator">
        <h2>(Accurate)Down payment using Home price</h2>
        <p className="title">
          If the home price and down payment percentages are known, use the
          calculator below to calculate an estimate for an amount needed in cash
          available for upfront costs.
        </p>
        <div className="input-group">
          <label>Home Price:</label>
          <input
            type="number"
            value={homePrice}
            onChange={(e) => setHomePrice(e.target.value)}
            placeholder="Enter amount"
          />
        </div>
        <div className="input-group">
          <label>Down Payment:</label>
          <input
            type="number"
            value={downPayment}
            onChange={(e) => setDownPayment(e.target.value)}
            placeholder="Enter amount"
          />
        </div>
        <div className="input-group">
          <label>
            Include Closing Costs:
            <input
              type="checkbox"
              checked={includeClosingCosts}
              onChange={() => setIncludeClosingCosts(!includeClosingCosts)}
            />
          </label>
        </div>
        {includeClosingCosts && (
          <div className="input-group">
            <label>Closing Costs:</label>
            <input
              type="number"
              value={closingCosts}
              onChange={(e) => setClosingCosts(e.target.value)}
              placeholder="Enter amount"
            />
          </div>
        )}
        <div className="input-group">
          <label>Interest Rate:</label>
          <input
            type="number"
            step="0.01"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            placeholder="Enter interest rate"
          />
        </div>
        <div className="input-group">
          <label>Loan Term (years):</label>
          <input
            type="number"
            value={loanTerm}
            onChange={(e) => setLoanTerm(e.target.value)}
            placeholder="Enter loan term"
          />
        </div>
        <button onClick={calculateCashNeeded} className="calculate-button">
          Calculate
        </button>
        <button onClick={clearFields} className="clear-button">
          Clear
        </button>

        <div className="result">
          <h2>Results</h2>
          <div>Cash Needed: ${cashNeeded}</div>
          <div>Down Payment: ${downPayment}</div>
          <div>Closing Costs: ${includeClosingCosts ? closingCosts : 0}</div>
          <div>Down Payment + Closing Costs: ${cashNeeded}</div>
          <div>Loan Amount: ${loanAmount}</div>
          <div>Monthly Payment: ${monthlyPayment}</div>
        </div>
      </div>
    </div>
  );
};

export default HomePriceCalculator;
