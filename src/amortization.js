import React, { useState } from "react";
import "./Calculator.css";

const AmortizationCalculator = () => {
  const [loanAmount, setLoanAmount] = useState("");
  const [loanTermYears, setLoanTermYears] = useState("");
  const [loanTermMonths, setLoanTermMonths] = useState(""); // Corrected state initialization
  const [interestRate, setInterestRate] = useState("");
  const [extraMonthlyPay, setExtraMonthlyPay] = useState("");
  const [extraYearlyPay, setExtraYearlyPay] = useState("");
  const [extraOneTimePay, setExtraOneTimePay] = useState("");
  const [startDateMonth, setStartDateMonth] = useState("");
  const [startDateYear, setStartDateYear] = useState("");
  const [showExtraPaymentOptions, setShowExtraPaymentOptions] = useState(false);
  const [monthlyPayment, setMonthlyPayment] = useState("");
  const [totalPayments, setTotalPayments] = useState("");
  const [totalInterest, setTotalInterest] = useState("");
  const [compoundingFrequency, setCompoundingFrequency] = useState("monthly");

  const toggleExtraPaymentOptions = () => {
    setShowExtraPaymentOptions(!showExtraPaymentOptions);
  };

  const calculateAmortization = () => {
    const totalMonths = loanTermYears * 12 + parseInt(loanTermMonths, 10);
    const monthlyInterestRate = interestRate / (12 * 100);

    // Calculate Monthly Payment
    const monthlyPayment =
      (loanAmount * monthlyInterestRate) /
      (1 - Math.pow(1 + monthlyInterestRate, -totalMonths));

    // Calculate Total Payments and Total Interest
    const totalPayments = monthlyPayment * totalMonths;
    const totalInterest = totalPayments - loanAmount;

    setMonthlyPayment(monthlyPayment.toFixed(2));
    setTotalPayments(totalPayments.toFixed(2));
    setTotalInterest(totalInterest.toFixed(2));
  };

  const calculateAmortizedLoan = () => {
    const totalMonths = loanTermYears * 12 + parseInt(loanTermMonths);
    const monthlyInterestRate = interestRate / (12 * 100);
    const compoundFrequencyMap = {
      monthly: 12,
      semiannually: 2,
      quarterly: 4,
      monthlyapr: 1,
      semimonthly: 24,
      biweekly: 26,
      weekly: 52,
      daily: 365,
      continuously: 1
    };
    const compoundPerYear = compoundFrequencyMap[compoundingFrequency];

    const monthlyPayment =
      (loanAmount * monthlyInterestRate) /
      (1 - Math.pow(1 + monthlyInterestRate, -totalMonths));

    const totalPayments = monthlyPayment * totalMonths;
    const totalInterest = totalPayments - loanAmount;

    setMonthlyPayment(monthlyPayment.toFixed(2));
    setTotalPayments(totalPayments.toFixed(2));
    setTotalInterest(totalInterest.toFixed(2));
  };

  const clearFields = () => {
    setLoanAmount("");
    setLoanTermYears("");
    setLoanTermMonths("");
    setInterestRate("");
    setCompoundingFrequency("monthly");
    setMonthlyPayment("");
    setTotalPayments("");
    setTotalInterest("");
  };

  return (
    <div className="App">
      <div className="calculator">
        <h1 className="title">Incomplete Amortization Calculator</h1>
        <div className="input-group">
          <label className="label">Loan Amount:</label>
          <input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
            placeholder="Enter the loan amount"
            className="input"
          />
        </div>
        <div className="input-group">
          <label className="label">Loan Term:</label>
          <input
            type="number"
            value={loanTermYears}
            onChange={(e) => setLoanTermYears(e.target.value)}
            placeholder="Years"
            className="input"
          />
          <input
            type="number"
            value={loanTermMonths}
            onChange={(e) => setLoanTermMonths(e.target.value)}
            placeholder="Months"
            className="input"
          />
        </div>
        <div className="input-group">
          <label className="label">Interest Rate (%):</label>
          <input
            type="number"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            placeholder="Enter the interest rate"
            className="input"
          />
        </div>
        <div className="input-group">
          <label className="label">Compounding Frequency:</label>
          <select
            value={compoundingFrequency}
            onChange={(e) => setCompoundingFrequency(e.target.value)}
            className="select"
          >
            <option value="monthly">Monthly</option>
            <option value="semiannually">Semiannually</option>
            <option value="quarterly">Quarterly</option>
            <option value="monthlyapr">Monthly (APR)</option>
            <option value="semimonthly">Semimonthly</option>
            <option value="biweekly">Biweekly</option>
            <option value="weekly">Weekly</option>
            <option value="daily">Daily</option>
            <option value="continuously">Continuously</option>
          </select>

          <div className="input-group">{/* Existing input elements */}</div>
          <div className="input-group">
            <label className="label">Optional: Make Extra Payments</label>
            <input
              type="checkbox"
              checked={showExtraPaymentOptions}
              onChange={toggleExtraPaymentOptions}
            />
          </div>
          {showExtraPaymentOptions && (
            <div>
              <div className="input-group">
                <label className="label">Extra Monthly Payment:</label>
                <input
                  type="number"
                  value={extraMonthlyPay}
                  onChange={(e) => setExtraMonthlyPay(e.target.value)}
                  placeholder="Enter extra monthly payment"
                  className="input"
                />
              </div>
              <div className="input-group">
                <label className="label">Extra Yearly Payment:</label>
                <input
                  type="number"
                  value={extraYearlyPay}
                  onChange={(e) => setExtraYearlyPay(e.target.value)}
                  placeholder="Enter extra yearly payment"
                  className="input"
                />
              </div>
              <div className="input-group">
                <label className="label">Extra One-Time Payment:</label>
                <input
                  type="number"
                  value={extraOneTimePay}
                  onChange={(e) => setExtraOneTimePay(e.target.value)}
                  placeholder="Enter extra one-time payment"
                  className="input"
                />
              </div>
            </div>
          )}
          <div className="input-group">
            <label className="label">Loan Start Date:</label>
            <input
              type="number"
              value={startDateMonth}
              onChange={(e) => setStartDateMonth(e.target.value)}
              placeholder="Month"
              className="input"
            />
            <input
              type="number"
              value={startDateYear}
              onChange={(e) => setStartDateYear(e.target.value)}
              placeholder="Year"
              className="input"
            />
          </div>
          <button onClick={calculateAmortization} className="calculate-button">
            Calculate
          </button>
          <button onClick={clearFields} className="clear-button">
            Clear
          </button>
          <div className="result">Monthly Payment: ${monthlyPayment}</div>
          <div className="result">Total Payments: ${totalPayments}</div>
          <div className="result">Total Interest: ${totalInterest}</div>

          {/* Rest of the input elements... */}
        </div>
        {/* Optional: Make Extra Payments */}

        {/* Loan Start Date */}
      </div>
    </div>
  );
};

export default AmortizationCalculator;
