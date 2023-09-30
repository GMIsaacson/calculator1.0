import React, { useState } from "react";
import "./Calculator.css";

const AprCalculator = () => {
  const [loanAmount, setLoanAmount] = useState("");
  const [loanTermYears, setLoanTermYears] = useState("");
  const [loanTermMonths, setLoanTermMonths] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [compoundFrequency, setCompoundFrequency] = useState("");
  const [paybackFrequency, setPaybackFrequency] = useState("");
  const [loanedFees, setLoanedFees] = useState("");
  const [upfrontFees, setUpfrontFees] = useState("");
  const [resultApr, setResultApr] = useState("");
  const [resultAmountFinanced, setResultAmountFinanced] = useState("");
  const [resultUpfrontFees, setResultUpfrontFees] = useState("");
  const [resultPaymentEveryMonth, setResultPaymentEveryMonth] = useState("");
  const [resultTotalPayments, setResultTotalPayments] = useState("");
  const [resultTotalInterest, setResultTotalInterest] = useState("");
  const [resultTotalPaymentsAndFees, setResultTotalPaymentsAndFees] = useState(
    ""
  );

  const calculateAPR = () => {
    // Gather necessary input values
    const loanAmountFloat = parseFloat(loanAmount);
    const loanTermYearsInt = parseInt(loanTermYears, 10);
    const interestRateFloat = parseFloat(interestRate);

    // Validate inputs
    if (
      isNaN(loanAmountFloat) ||
      isNaN(loanTermYearsInt) ||
      isNaN(interestRateFloat)
    ) {
      // Handle invalid inputs
      console.error(
        "Please enter valid numerical values for loan amount, loan term, and interest rate."
      );
      return;
    }

    // Perform APR calculation (replace this with the actual APR calculation logic)
    const calculatedApr = performAprCalculation(
      loanAmountFloat,
      loanTermYearsInt,
      interestRateFloat
    );

    // Update result states
    setResultApr(calculatedApr);
    // Update other result states based on the calculation
    // ...
  };

  const performAprCalculation = (loanAmount, loanTermYears, interestRate) => {
    // Implement the actual APR calculation logic here
    // This is a placeholder calculation, replace with your actual calculation
    const calculatedApr = interestRate * loanTermYears; // Replace this with the actual formula

    return calculatedApr;
  };

  const clearFields = () => {
    setLoanAmount("");
    setLoanTermYears("");
    setLoanTermMonths("");
    setInterestRate("");
    setCompoundFrequency("");
    setPaybackFrequency("");
    setLoanedFees("");
    setUpfrontFees("");
    setResultApr("");
    setResultAmountFinanced("");
    setResultUpfrontFees("");
    setResultPaymentEveryMonth("");
    setResultTotalPayments("");
    setResultTotalInterest("");
    setResultTotalPaymentsAndFees("");
  };

  return (
    <div className="App">
      <div className="calculator">
        <h1 className="title"> Incorrect APR Calculator</h1>
        <div className="input-group">
          <label>Loan Amount</label>
          <input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
            placeholder="Enter loan amount"
          />
        </div>
        <div className="input-group">
          <label>Loan Term</label>
          <input
            type="number"
            value={loanTermYears}
            onChange={(e) => setLoanTermYears(e.target.value)}
            placeholder="Years"
          />
          <input
            type="number"
            value={loanTermMonths}
            onChange={(e) => setLoanTermMonths(e.target.value)}
            placeholder="Months"
          />
        </div>
        <div className="input-group">
          <label>Interest Rate</label>
          <input
            type="number"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            placeholder="Enter interest rate (%)"
          />
        </div>
        <div className="input-group">
          <label>Compound Frequency</label>
          <select
            value={compoundFrequency}
            onChange={(e) => setCompoundFrequency(e.target.value)}
          >
            <option value="">Select Frequency</option>
            <option value="annually">Annually</option>
            <option value="semi-annually">Semi-Annually</option>
            <option value="quarterly">Quarterly</option>
            <option value="monthly">Monthly</option>
            <option value="semi-monthly">Semi-Monthly</option>
            <option value="biweekly">Biweekly</option>
            <option value="weekly">Weekly</option>
            <option value="daily">Daily</option>
            <option value="continuously">Continuously</option>
          </select>
        </div>
        <div className="input-group">
          <label>Pay Back Frequency</label>
          <select
            value={paybackFrequency}
            onChange={(e) => setPaybackFrequency(e.target.value)}
          >
            <option value="">Select Frequency</option>
            <option value="every_day">Every Day</option>
            <option value="every_week">Every Week</option>
            <option value="every_two_weeks">Every Two Weeks</option>
            <option value="every_half_month">Every Half Month</option>
            <option value="every_quarter">Every Quarter</option>
            <option value="every_6_months">Every 6 Months</option>
            <option value="every_year">Every Year</option>
          </select>
        </div>

        <div className="input-group">
          <label>Loan Fees</label>
          <input
            type="number"
            value={loanedFees}
            onChange={(e) => setLoanedFees(e.target.value)}
            placeholder="Enter loan fees"
          />
        </div>
        <div className="input-group">
          <label>Upfront Fees</label>
          <input
            type="number"
            value={upfrontFees}
            onChange={(e) => setUpfrontFees(e.target.value)}
            placeholder="Enter upfront fees"
          />
        </div>

        <button onClick={calculateAPR} className="calculate-button">
          Calculate
        </button>
        <button onClick={clearFields} className="clear-button">
          Clear
        </button>
        <div className="results">
          Real APR: {resultApr}%
          <br />
          Amount Financed: ${resultAmountFinanced}
          <br />
          Upfront Out-of-Pocket Fees: ${resultUpfrontFees}
          <br />
          Payment Every Month: ${resultPaymentEveryMonth}
          <br />
          Total of 120 Payments: ${resultTotalPayments}
          <br />
          Total Interest: ${resultTotalInterest}
          <br />
          All Payments and Fees: ${resultTotalPaymentsAndFees}
        </div>
      </div>
    </div>
  );
};

export default AprCalculator;
