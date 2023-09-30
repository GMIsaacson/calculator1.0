import React, { useState } from "react";
import "../Calculator.css";

const MortgageCalculator = () => {
  const [homePrice, setHomePrice] = useState("");
  const [downPayment, setDownPayment] = useState("");
  const [loanTerm, setLoanTerm] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [includeCosts, setIncludeCosts] = useState(false);
  const [propertyTaxes, setPropertyTaxes] = useState("");
  const [homeInsurance, setHomeInsurance] = useState("");
  const [hoaFee, setHoaFee] = useState("");
  const [otherCost, setOtherCost] = useState("");
  const [result, setResult] = useState("");
  const [steps, setSteps] = useState("");
  const [amortizationSchedule, setAmortizationSchedule] = useState([]);
  const [annualSchedule, setAnnualSchedule] = useState(false); // New state for annual schedule

  const calculateMortgage = () => {
    const principal = homePrice - downPayment;
    const monthlyInterestRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;

    // Calculate the monthly mortgage payment
    const mortgage =
      (principal * monthlyInterestRate) /
      (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));

    let totalCostWithExtras = mortgage * numberOfPayments;

    if (includeCosts) {
      totalCostWithExtras +=
        (propertyTaxes || 0) +
        (homeInsurance || 0) +
        (hoaFee || 0) +
        (otherCost || 0);
    }

    setResult(`Monthly Mortgage Payment: $${mortgage.toFixed(2)}`);
    setSteps(`Total Cost of Mortgage: $${totalCostWithExtras.toFixed(2)}`);
    if (includeCosts) {
      setSteps(
        (prevSteps) =>
          `${prevSteps}\nTotal Cost of Mortgage with Extras: $${totalCostWithExtras.toFixed(
            2
          )}`
      );
    }
  };

  const clearFields = () => {
    setHomePrice("");
    setDownPayment("");
    setLoanTerm("");
    setInterestRate("");
    setIncludeCosts(false);
    setPropertyTaxes("");
    setHomeInsurance("");
    setHoaFee("");
    setOtherCost("");
    setResult("");
    setSteps("");
  };

  const generateAmortizationSchedule = (annualSchedule) => {
    // This is a simplified amortization schedule generation
    const schedule = [];
    let remainingBalance = homePrice - downPayment;
    const monthlyInterestRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;

    const monthlyMortgage =
      (remainingBalance * monthlyInterestRate) /
      (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));

    for (let i = 1; i <= numberOfPayments; i++) {
      const interest = remainingBalance * monthlyInterestRate;
      const principal = monthlyMortgage - interest;

      if (annualSchedule && i % 12 === 0) {
        schedule.push({
          year: Math.floor(i / 12),
          date: `December ${i / 12}`,
          interest: interest.toFixed(2),
          principal: principal.toFixed(2),
          endingBalance: remainingBalance.toFixed(2)
        });
      } else if (!annualSchedule) {
        schedule.push({
          month: i,
          interest: interest.toFixed(2),
          principal: principal.toFixed(2),
          endingBalance: remainingBalance.toFixed(2)
        });
      }

      remainingBalance -= principal;
    }

    return schedule;
  };

  const displayAmortizationSchedule = (annualSchedule) => {
    const schedule = generateAmortizationSchedule(annualSchedule);
    setAmortizationSchedule(schedule);
  };

  return (
    <div className="App">
      <div className="calculator">
        <h1 className="title">Mortgage Calculator</h1>
        <div className="input-group">
          <label className="label">Home Price ($):</label>
          <input
            type="number"
            value={homePrice}
            onChange={(e) => setHomePrice(e.target.value)}
            placeholder="Enter home price"
            className="input"
          />
        </div>
        <div className="input-group">
          <label className="label">Down Payment ($):</label>
          <input
            type="number"
            value={downPayment}
            onChange={(e) => setDownPayment(e.target.value)}
            placeholder="Enter down payment"
            className="input"
          />
        </div>
        <div className="input-group">
          <label className="label">Loan Term (years):</label>
          <input
            type="number"
            value={loanTerm}
            onChange={(e) => setLoanTerm(e.target.value)}
            placeholder="Enter loan term"
            className="input"
          />
        </div>
        <div className="input-group">
          <label className="label">Interest Rate (%):</label>
          <input
            type="number"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            placeholder="Enter interest rate"
            className="input"
          />
        </div>
        <div className="input-group">
          <label className="label">Include Taxes & Costs:</label>
          <input
            type="checkbox"
            checked={includeCosts}
            onChange={() => setIncludeCosts(!includeCosts)}
            className="checkbox"
          />
        </div>
        {includeCosts && (
          <>
            <div className="input-group">
              <label className="label">Property Taxes (% or $):</label>
              <input
                type="number"
                value={propertyTaxes}
                onChange={(e) => setPropertyTaxes(e.target.value)}
                placeholder="Enter property taxes"
                className="input"
              />
            </div>
            <div className="input-group">
              <label className="label">Home Insurance (% or $):</label>
              <input
                type="number"
                value={homeInsurance}
                onChange={(e) => setHomeInsurance(e.target.value)}
                placeholder="Enter home insurance"
                className="input"
              />
            </div>
            <div className="input-group">
              <label className="label">HOA Fee (% or $):</label>
              <input
                type="number"
                value={hoaFee}
                onChange={(e) => setHoaFee(e.target.value)}
                placeholder="Enter HOA fee"
                className="input"
              />
            </div>
            <div className="input-group">
              <label className="label">Other Cost (% or $):</label>
              <input
                type="number"
                value={otherCost}
                onChange={(e) => setOtherCost(e.target.value)}
                placeholder="Enter other cost"
                className="input"
              />
            </div>
          </>
        )}
        <button onClick={calculateMortgage} className="calculate-button">
          Calculate
        </button>
        <button onClick={clearFields} className="clear-button">
          Clear
        </button>
        <div className="steps">{steps}</div>
        <div className="result">{result}</div>
      </div>

      <button
        onClick={() => displayAmortizationSchedule(true)}
        className="calculate-button"
      >
        Generate Annual Amortization Schedule
      </button>
      <button
        onClick={() => displayAmortizationSchedule(false)}
        className="calculate-button"
      >
        Generate Monthly Amortization Schedule
      </button>

      {amortizationSchedule.length > 0 && (
        <table className="amortization-table">
          <thead>
            <tr>
              {annualSchedule ? (
                <>
                  <th>Year</th>
                  <th>Date</th>
                </>
              ) : (
                <th>Month</th>
              )}
              <th>Interest</th>
              <th>Principal</th>
              <th>Ending Balance</th>
            </tr>
          </thead>
          <tbody>
            {amortizationSchedule.map((entry, index) => (
              <tr key={index}>
                {annualSchedule ? (
                  <>
                    <td>{entry.year}</td>
                    <td>{entry.date}</td>
                  </>
                ) : (
                  <td>{entry.month}</td>
                )}
                <td>{entry.interest}</td>
                <td>{entry.principal}</td>
                <td>{entry.endingBalance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MortgageCalculator;
