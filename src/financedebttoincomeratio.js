import React, { useState } from 'react';
import './Calculator.css';

const DtiCalculator = () => {
  const [incomes, setIncomes] = useState({
    salary: 0,
    pensionSocialSecurity: 0,
    investmentSavings: 0,
    otherIncome: 0,
  });

  const [debts, setDebts] = useState({
    rentalCost: 0,
    mortgage: 0,
    propertyTax: 0,
    hoaFees: 0,
    homeownerInsurance: 0,
    creditCards: 0,
    studentLoan: 0,
    autoLoan: 0,
    otherLoansLiabilities: 0,
  });

  const [frontEndDti, setFrontEndDti] = useState(0);
  const [backEndDti, setBackEndDti] = useState(0);

  const handleIncomesChange = (field, value) => {
    setIncomes({ ...incomes, [field]: value });
  };

  const handleDebtsChange = (field, value) => {
    setDebts({ ...debts, [field]: value });
  };

  const calculateDti = () => {
    const totalIncome = Object.values(incomes).reduce((total, income) => total + parseFloat(income), 0);
    const totalDebt = Object.values(debts).reduce((total, debt) => total + parseFloat(debt), 0);

    setFrontEndDti((totalDebt / totalIncome) * 100);
    setBackEndDti(((totalDebt + debts.mortgage) / totalIncome) * 100);
  };

  return (
    <div className="App">
      <div className="calculator">
        <h1 className="title">Incorrect Debt-to-Income (DTI) Ratio Calculator</h1>
        <div className="section">
          <h2 className="section-title">Incomes (Before Tax)</h2>
          <div className="input-group">
            <label>Salary & Earned Income:</label>
            <input
              type="number"
              value={incomes.salary}
              onChange={(e) => handleIncomesChange('salary', e.target.value)}
            />
            <span>/</span>
            <select>
              <option>Year</option>
              <option>Month</option>
            </select>
          </div>
          <div className="input-group">
            <label>Pension & Social Security:</label>
            <input
              type="number"
              value={incomes.pensionSocialSecurity}
              onChange={(e) => handleIncomesChange('pensionSocialSecurity', e.target.value)}
            />
            <span>/</span>
            <select>
              <option>Year</option>
              <option>Month</option>
            </select>
          </div>
          <div className="input-group">
            <label>Investment & Savings:</label>
            <input
              type="number"
              value={incomes.investmentSavings}
              onChange={(e) => handleIncomesChange('investmentSavings', e.target.value)}
            />
            <span>/</span>
            <select>
              <option>Year</option>
              <option>Month</option>
            </select>
          </div>
          <div className="input-group">
            <label>Other Income:</label>
            <input
              type="number"
              value={incomes.otherIncome}
              onChange={(e) => handleIncomesChange('otherIncome', e.target.value)}
            />
            <span>/</span>
            <select>
              <option>Year</option>
              <option>Month</option>
            </select>
          </div>
        </div>
        <div className="section">
          <h2 className="section-title">Debts / Expenses</h2>
          <div className="input-group">
            <label>Rental Cost:</label>
            <input
              type="number"
              value={debts.rentalCost}
              onChange={(e) => handleDebtsChange('rentalCost', e.target.value)}
            />
            <span>/</span>
            <select>
              <option>Year</option>
              <option>Month</option>
            </select>
          </div>
          <div className="input-group">
            <label>Mortgage:</label>
            <input
              type="number"
              value={debts.mortgage}
              onChange={(e) => handleDebtsChange('mortgage', e.target.value)}
            />
            <span>/</span>
            <select>
              <option>Year</option>
              <option>Month</option>
            </select>
          </div>
          {/* Add other debt input fields here similarly */}
        </div>
        <button onClick={calculateDti} className="calculate-button">
          Calculate DTI
        </button>
        <div className="result">
          <p>Back-End DTI Ratio: {backEndDti.toFixed(2)}%</p>
          <p>Front-End DTI Ratio: {frontEndDti.toFixed(2)}%</p>
          <p>Total Income: ${incomes.salary} / month</p>
          






        </div>
      </div>
    </div>
  );
};

export default DtiCalculator;
