import React, { useState } from 'react';
import './Calculator.css';

const HouseAffordabilityFixedBudgetCalculator = () => {
  const [monthlyBudget, setMonthlyBudget] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTerm, setLoanTerm] = useState('');
  const [propertyTaxRate, setPropertyTaxRate] = useState('');
  const [hoaRate, setHoaRate] = useState('');
  const [insuranceRate, setInsuranceRate] = useState('');
  const [maintenanceCostRate, setMaintenanceCostRate] = useState('');
  const [result, setResult] = useState('');

  

  const calculateAffordability = () => {
    // Perform affordability calculation based on fixed monthly budget
    const monthlyInterestRate = (interestRate / 100) / 12; // Convert annual interest rate to monthly
    const loanTermMonths = loanTerm * 12; // Convert loan term to months

    // Calculate the affordable purchase amount based on fixed monthly budget and interest rate
    const affordablePurchaseAmount = (monthlyBudget / monthlyInterestRate) * (1 - Math.pow(1 + monthlyInterestRate, -loanTermMonths));

    setResult(`Affordable Purchase Amount: $${affordablePurchaseAmount.toFixed(2)}`);
  };


  const clearFields = () => {
    // Clear all input fields and results
    setMonthlyBudget('');
    setInterestRate('');
    setLoanTerm('');
    setPropertyTaxRate('');
    setHoaRate('');
    setInsuranceRate('');
    setMaintenanceCostRate('');
    setResult('');
  };


  return (
    <div className="App">
    <div className="calculator">
      <h1 className="title"> incorrect House Affordability Calculator (Fixed Monthly Budget)</h1>
      <div className="input-group">
        <label>Monthly Budget for Housing Costs ($):</label>
        <input
          type="number"
          value={monthlyBudget}
          onChange={(e) => setMonthlyBudget(e.target.value)}
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
        <label>Mortgage Loan Term (years):</label>
        <input
          type="number"
          value={loanTerm}
          onChange={(e) => setLoanTerm(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>Property Tax Rate (% per year):</label>
        <input
          type="number"
          value={propertyTaxRate}
          onChange={(e) => setPropertyTaxRate(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>HOA Rate (% per year):</label>
        <input
          type="number"
          value={hoaRate}
          onChange={(e) => setHoaRate(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>Insurance Rate (% per year):</label>
        <input
          type="number"
          value={insuranceRate}
          onChange={(e) => setInsuranceRate(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>Maintenance Cost Rate (% per year):</label>
        <input
          type="number"
          value={maintenanceCostRate}
          onChange={(e) => setMaintenanceCostRate(e.target.value)}
        />
      </div>

      <button onClick={calculateAffordability}>Calculate</button>
      <button onClick={clearFields} className="clear-button">Clear</button>
      <div className="result">{result}</div>
    </div>
  </div>
  );
};

export default HouseAffordabilityFixedBudgetCalculator;
