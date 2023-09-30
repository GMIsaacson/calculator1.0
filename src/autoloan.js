import React, { useState } from "react";
import "./Calculator.css";

const AutoLoanCalculator = () => {
  const [autoPrice, setAutoPrice] = useState("");
  const [loanTerm, setLoanTerm] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [cashIncentives, setCashIncentives] = useState("");
  const [downPayment, setDownPayment] = useState("");
  const [tradeInValue, setTradeInValue] = useState("");
  const [amountOwedOnTradeIn, setAmountOwedOnTradeIn] = useState("");
  const [state, setState] = useState("");
  const [salesTax, setSalesTax] = useState("");
  const [fees, setFees] = useState("");
  const [includeAllFeesInLoan, setIncludeAllFeesInLoan] = useState(false);

  const calculateAutoLoan = () => {
    // Calculate auto loan
    // ... calculation logic
    // Update results
  };

  const clearFields = () => {
    setAutoPrice("");
    setLoanTerm("");
    setInterestRate("");
    setCashIncentives("");
    setDownPayment("");
    setTradeInValue("");
    setAmountOwedOnTradeIn("");
    setState("");
    setSalesTax("");
    setFees("");
    setIncludeAllFeesInLoan(false);
  };

  const usStates = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming"
  ];

  return (
    <div className="App">
      <div className="calculator">
        <h1 className="title">Auto Loan Calculator</h1>
        <div className="input-group">
          <label>Auto Price:</label>
          <input
            type="number"
            value={autoPrice}
            onChange={(e) => setAutoPrice(e.target.value)}
            placeholder="$50,000"
          />
        </div>
        <div className="input-group">
          <label>Loan Term (months):</label>
          <input
            type="number"
            value={loanTerm}
            onChange={(e) => setLoanTerm(e.target.value)}
            placeholder="60 months"
          />
        </div>
        <div className="input-group">
          <label>Interest Rate (%):</label>
          <input
            type="number"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            placeholder="5%"
          />
        </div>
        <div className="input-group">
          <label>Cash Incentives:</label>
          <input
            type="number"
            value={cashIncentives}
            onChange={(e) => setCashIncentives(e.target.value)}
            placeholder="$0"
          />
        </div>
        <div className="input-group">
          <label>Down Payment:</label>
          <input
            type="number"
            value={downPayment}
            onChange={(e) => setDownPayment(e.target.value)}
            placeholder="$10,000"
          />
        </div>
        <div className="input-group">
          <label>Trade-in Value:</label>
          <input
            type="number"
            value={tradeInValue}
            onChange={(e) => setTradeInValue(e.target.value)}
            placeholder="$0"
          />
        </div>
        <div className="input-group">
          <label>Amount Owed on Trade-in:</label>
          <input
            type="number"
            value={amountOwedOnTradeIn}
            onChange={(e) => setAmountOwedOnTradeIn(e.target.value)}
            placeholder="$0"
          />
        </div>
        <div className="input-group">
          <label>Your State:</label>
          <select value={state} onChange={(e) => setState(e.target.value)}>
            <option value="">Select a state</option>
            {usStates.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>
        <div className="input-group">
          <label>Sales Tax (%):</label>
          <input
            type="number"
            value={salesTax}
            onChange={(e) => setSalesTax(e.target.value)}
            placeholder="6.5%"
          />
        </div>
        <div className="input-group">
          <label>Title, Registration and Other Fees:</label>
          <input
            type="number"
            value={fees}
            onChange={(e) => setFees(e.target.value)}
            placeholder="$2700"
          />
        </div>
        <div className="input-group">
          <label>Include All Fees In Loan:</label>
          <input
            type="checkbox"
            checked={includeAllFeesInLoan}
            onChange={(e) => setIncludeAllFeesInLoan(e.target.checked)}
          />
        </div>
        {/* Add other input fields as shown in the provided example */}
        {/* ... */}
        <button onClick={calculateAutoLoan} className="calculate-button">
          Calculate
        </button>
        <button onClick={clearFields} className="clear-button">
          Clear
        </button>
        {/* Display results */}
        <div className="results">
          <div>
            Monthly Pay: <span>$867.13</span>
          </div>
          <div>
            Total Loan Amount: <span>$45,950.00</span>
          </div>
          <div>
            Sale Tax: <span>$3,250.00</span>
          </div>
          <div>
            Upfront Payment: <span>$10,000.00</span>
          </div>
          <div>
            Total of 60 Loan Payments: <span>$52,027.99</span>
          </div>
          <div>
            Total Loan Interest: <span>$6,077.99</span>
          </div>
          <div>
            Total Cost (price, interest, tax, fees): <span>$62,027.99</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutoLoanCalculator;
