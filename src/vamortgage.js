import React, { useState } from "react";
import "./Calculator.css";

const VAMortgageCalculator = () => {
  const [homePrice, setHomePrice] = useState("");
  const [downPaymentType, setDownPaymentType] = useState("$");
  const [downPayment, setDownPayment] = useState("");
  const [loanTerm, setLoanTerm] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [vaEligibility, setVaEligibility] = useState("Active/veteran");
  const [usedVALoanBefore, setUsedVALoanBefore] = useState("no");
  const [serviceRelatedDisability, setServiceRelatedDisability] = useState(
    "no"
  );
  const [vaFundingFeeOption, setVaFundingFeeOption] = useState("financed");

  const calculateVAFundingFee = () => {
    const downPaymentPercentage = parseFloat(downPayment);
    let fundingFeeRate = 0;

    if (downPaymentPercentage < 5) {
      fundingFeeRate = vaFundingFeeOption === "financed" ? 2.15 : 3.3;
    } else if (downPaymentPercentage >= 5 && downPaymentPercentage < 10) {
      fundingFeeRate = vaFundingFeeOption === "financed" ? 1.5 : 1.5;
    } else {
      fundingFeeRate = vaFundingFeeOption === "financed" ? 1.25 : 1.25;
    }

    // Adjust funding fee based on whether it's first time use or subsequent use
    if (usedVALoanBefore === "yes") {
      fundingFeeRate += 0.5; // Additional 0.5% for subsequent use
    }

    return (fundingFeeRate / 100) * homePrice;
  };
  // Calculate effective loan amount
  const calculateEffectiveLoanAmount = () => {
    const loanAmount =
      downPaymentType === "$"
        ? homePrice - parseFloat(downPayment)
        : homePrice * (1 - parseFloat(downPayment) / 100);
    const vaFundingFee = calculateVAFundingFee();
    return loanAmount + vaFundingFee;
  };

  // Calculate monthly interest rate
  const calculateMonthlyInterestRate = () => {
    return parseFloat(interestRate) / 12 / 100; // Monthly Interest Rate = (Annual Interest Rate) / 12
  };

  // Calculate monthly payment
  const calculateMonthlyPayment = () => {
    const effectiveLoanAmount = calculateEffectiveLoanAmount();
    const monthlyInterestRate = calculateMonthlyInterestRate();
    const totalMonths = loanTerm * 12;

    // Monthly Payment = [Effective Loan Amount * Monthly Interest Rate] / (1 - (1 + Monthly Interest Rate)^(-Loan Term in Months))
    return (
      (effectiveLoanAmount * monthlyInterestRate) /
      (1 - Math.pow(1 + monthlyInterestRate, -totalMonths))
    );
  };

  const monthlyPayment = calculateMonthlyPayment(); // Calculate monthly payment

  const calculateResults = () => {
    // Calculate VA mortgage results using above functions
    const vaFundingFee = calculateVAFundingFee();
    const effectiveLoanAmount = calculateEffectiveLoanAmount();
    const monthlyInterestRate = calculateMonthlyInterestRate();
    const monthlyPayment = calculateMonthlyPayment();

    // Update state or display results
  };

  const clearFields = () => {
    setHomePrice("");
    setDownPaymentType("$");
    setDownPayment("");
    setLoanTerm("");
    setInterestRate("");
    setVaEligibility("Active/veteran");
    setUsedVALoanBefore("no");
    setServiceRelatedDisability("no");
    setVaFundingFeeOption("financed");
  };

  return (
    <div className="calculator">
      <h1 className="title">(slightly off) VA Mortgage Calculator</h1>
      {/* Input fields (existing and new) */}
      {/* ... */}

      <div className="input-group">
        <label className="label">Home Price:</label>
        <input
          type="number"
          value={homePrice}
          onChange={(e) => setHomePrice(e.target.value)}
          placeholder="Enter Home Price"
          className="input"
        />
      </div>
      <div className="input-group">
        <label className="label">Down Payment:</label>
        <input
          type="number"
          value={downPayment}
          onChange={(e) => setDownPayment(e.target.value)}
          placeholder="Enter Down Payment"
          className="input"
        />
        <select
          value={downPaymentType}
          onChange={(e) => setDownPaymentType(e.target.value)}
          className="select"
        >
          <option value="$">$</option>
          <option value="%">%</option>
        </select>
      </div>
      <div className="input-group">
        <label className="label">Loan Term (years):</label>
        <input
          type="number"
          value={loanTerm}
          onChange={(e) => setLoanTerm(e.target.value)}
          placeholder="Enter Loan Term"
          className="input"
        />
      </div>
      <div className="input-group">
        <label className="label">Interest Rate (%):</label>
        <input
          type="number"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
          placeholder="Enter Interest Rate"
          className="input"
        />
      </div>
      {/* VA Eligibility */}
      <div className="input-group">
        <label className="label">VA Eligibility:</label>
        <div className="radio-group">
          <label className="radio-label">
            <input
              type="radio"
              value="Active/veteran"
              checked={vaEligibility === "Active/veteran"}
              onChange={() => setVaEligibility("Active/veteran")}
            />
            Active/veteran
          </label>
          <label className="radio-label">
            <input
              type="radio"
              value="Reservist/National Guard"
              checked={vaEligibility === "Reservist/National Guard"}
              onChange={() => setVaEligibility("Reservist/National Guard")}
            />
            Reservist/National Guard
          </label>
          <label className="radio-label">
            <input
              type="radio"
              value="Surviving Spouses"
              checked={vaEligibility === "Surviving Spouses"}
              onChange={() => setVaEligibility("Surviving Spouses")}
            />
            Surviving Spouses
          </label>
        </div>
      </div>
      <div className="input-group">
        <label className="label">Used VA Loan Before?</label>
        <div className="radio-group">
          <label className="radio-label">
            <input
              type="radio"
              value="yes"
              checked={usedVALoanBefore === "yes"}
              onChange={() => setUsedVALoanBefore("yes")}
            />
            Yes
          </label>
          <label className="radio-label">
            <input
              type="radio"
              value="no"
              checked={usedVALoanBefore === "no"}
              onChange={() => setUsedVALoanBefore("no")}
            />
            No
          </label>
        </div>
      </div>
      <div className="input-group">
        <label className="label">Service-Related Disability (10+%):</label>
        <div className="radio-group">
          <label className="radio-label">
            <input
              type="radio"
              value="yes"
              checked={serviceRelatedDisability === "yes"}
              onChange={() => setServiceRelatedDisability("yes")}
            />
            Yes
          </label>
          <label className="radio-label">
            <input
              type="radio"
              value="no"
              checked={serviceRelatedDisability === "no"}
              onChange={() => setServiceRelatedDisability("no")}
            />
            No
          </label>
        </div>
      </div>
      <div className="input-group">
        <label className="label">VA Funding Fee:</label>
        <div className="radio-group">
          <label className="radio-label">
            <input
              type="radio"
              value="financed"
              checked={vaFundingFeeOption === "financed"}
              onChange={() => setVaFundingFeeOption("financed")}
            />
            Financed into loan
          </label>
          <label className="radio-label">
            <input
              type="radio"
              value="upfront"
              checked={vaFundingFeeOption === "upfront"}
              onChange={() => setVaFundingFeeOption("upfront")}
            />
            Paid upfront
          </label>
        </div>
      </div>

      <button onClick={calculateMonthlyPayment} className="calculate-button">
        Calculate
      </button>
      <button onClick={clearFields} className="clear-button">
        Clear
      </button>
      <div className="result-section">
        <h2>Results</h2>
        <div className="result-row">
          <div className="result-label">Monthly Pay:</div>
          <div className="result-value">${monthlyPayment.toFixed(2)}</div>
        </div>
        <div className="result-row">
          <div className="result-label">House Price:</div>
          <div className="result-value">${homePrice}</div>
        </div>
        <div className="result-row">
          <div className="result-label">VA Funding Fee (2.15%):</div>
          <div className="result-value">
            ${calculateVAFundingFee().toFixed(2)}
          </div>
        </div>
        <div className="result-row">
          <div className="result-label">Down Payment:</div>
          <div className="result-value">${downPayment}</div>
        </div>
        <div className="result-row">
          <div className="result-label">Loan Amount:</div>
          <div className="result-value">
            ${calculateEffectiveLoanAmount().toFixed(2)}
          </div>
        </div>
        <div className="result-row">
          <div className="result-label">Total of 360 Mortgage Payments:</div>
          <div className="result-value">
            ${(monthlyPayment * loanTerm * 12).toFixed(2)}
          </div>
        </div>
        <div className="result-row">
          <div className="result-label">Total Interest:</div>
          <div className="result-value">
            $
            {(
              monthlyPayment * loanTerm * 12 -
              calculateEffectiveLoanAmount()
            ).toFixed(2)}
          </div>
        </div>
        <div className="result-row">
          <div className="result-label">Mortgage Payoff Date:</div>
          <div className="result-value">{`Sep. ${
            new Date().getFullYear() + loanTerm
          }`}</div>
        </div>
      </div>
    </div>
  );
};

export default VAMortgageCalculator;
