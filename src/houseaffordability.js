import React, { useState } from 'react';
import './Calculator.css';

const HouseAffordabilityCalculator = () => {
  const [annualIncome, setAnnualIncome] = useState('');
  const [loanTerm, setLoanTerm] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [longTermDebts, setLongTermDebts] = useState('');
  const [downPaymentPercentage, setDownPaymentPercentage] = useState('');
  const [downPaymentAmount, setDownPaymentAmount] = useState('');
  const [propertyTaxRate, setPropertyTaxRate] = useState('');
  const [propertyTaxAmount, setPropertyTaxAmount] = useState('');
  const [hoaRate, setHoaRate] = useState('');
  const [hoaAmount, setHoaAmount] = useState('');
  const [insuranceRate, setInsuranceRate] = useState('');
  const [insuranceAmount, setInsuranceAmount] = useState('');
  const [dtiRatio, setDtiRatio] = useState('');
  const [result, setResult] = useState('');
  const [steps, setSteps] = useState('');

 
  const calculateAffordability = () => {
    // Calculate the affordability based on the provided formula or logic
    const monthlyIncome = annualIncome / 12; // Convert annual income to monthly
    const loanTermMonths = loanTerm * 12; // Convert loan term to months
    const monthlyInterestRate = (interestRate / 100) / 12; // Convert annual interest rate to monthly
  
    // Calculate monthly mortgage payment using the formula for monthly payment on a fixed-rate mortgage
    const monthlyMortgagePayment =
      (monthlyIncome * (dtiRatio / 100)) /
      (1 - Math.pow(1 + monthlyInterestRate, -loanTermMonths));
  
    // Calculate the affordable purchase amount using the monthly mortgage payment
    const affordablePurchaseAmount =
      monthlyMortgagePayment /
      (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, loanTermMonths));
  
    setResult(`Affordable Purchase Amount: $${affordablePurchaseAmount.toFixed(2)}`);
  };
  

  const clearFields = () => {
    // Clear all input fields and results
    setAnnualIncome('');
    setLoanTerm('');
    setInterestRate('');
    setLongTermDebts('');
    setDownPaymentPercentage('');
    setDownPaymentAmount('');
    setPropertyTaxRate('');
    setPropertyTaxAmount('');
    setHoaRate('');
    setHoaAmount('');
    setInsuranceRate('');
    setInsuranceAmount('');
    setDtiRatio('');
    setResult('');
    setSteps('');
  };
  const dtiRatioOptions = [25, 30, 35, 40, 45, 50]; // Example DTI ratio options, adjust as needed
  return (
    <div className="App">
    <div className="calculator">
      <h1 className="title"> incorrect House Affordability Calculator</h1>
      <div className="input-group">
        <label>Annual Household Income:</label>
        <input
          type="number"
          value={annualIncome}
          onChange={(e) => setAnnualIncome(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>Mortgage Loan Term (years):</label>
        <input
          type="number"
          value={loanTerm}
          onChange={(e) => setLoanTerm(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>Interest Rate (%):</label>
        <input
          type="number"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>Long-Term Debts:</label>
        <input
          type="number"
          value={longTermDebts}
          onChange={(e) => setLongTermDebts(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>Down Payment Percentage (%):</label>
        <input
          type="number"
          value={downPaymentPercentage}
          onChange={(e) => setDownPaymentPercentage(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>Down Payment Amount ($):</label>
        <input
          type="number"
          value={downPaymentAmount}
          onChange={(e) => setDownPaymentAmount(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>Property Tax Rate (%):</label>
        <input
          type="number"
          value={propertyTaxRate}
          onChange={(e) => setPropertyTaxRate(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>Property Tax Amount ($):</label>
        <input
          type="number"
          value={propertyTaxAmount}
          onChange={(e) => setPropertyTaxAmount(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>HOA Rate (%):</label>
        <input
          type="number"
          value={hoaRate}
          onChange={(e) => setHoaRate(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>HOA Amount ($):</label>
        <input
          type="number"
          value={hoaAmount}
          onChange={(e) => setHoaAmount(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>Insurance Rate (%):</label>
        <input
          type="number"
          value={insuranceRate}
          onChange={(e) => setInsuranceRate(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>Insurance Amount ($):</label>
        <input
          type="number"
          value={insuranceAmount}
          onChange={(e) => setInsuranceAmount(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>DTI Ratio:</label>
        <select
          value={dtiRatio}
          onChange={(e) => setDtiRatio(e.target.value)}
        >
          {dtiRatioOptions.map((ratio) => (
            <option key={ratio} value={ratio}>
              {ratio}%
            </option>
          ))}
        </select>
      </div>
      
      <button onClick={calculateAffordability}>Calculate</button>
      <button onClick={clearFields}>Clear</button>
      <div className="result">{result}</div>
      <div className="steps">{steps}</div>
    </div>
  </div>
  );
};

export default HouseAffordabilityCalculator;

