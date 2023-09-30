import React, { useState } from 'react';
import './Calculator.css';

const RentCalculator = () => {
  const [income, setIncome] = useState('');
  const [incomePeriod, setIncomePeriod] = useState('perMonth');
  const [debtPayback, setDebtPayback] = useState('');
  const [result, setResult] = useState('');

  const calculateRentAffordability = () => {
    let monthlyIncome = income;
    if (incomePeriod === 'perYear') {
      monthlyIncome /= 12;
    }

    const maxRent = monthlyIncome * (2 / 3);
    const recommendedMaxRent = monthlyIncome * (0.3);
    const recommendedMinRent = monthlyIncome * (0.23);

    setResult(
      `You can afford up to $${maxRent.toFixed(2)} per month on a rental payment.\n` +
      `It is recommended to keep your rental payment below $${recommendedMaxRent.toFixed(2)} per month.\n\n` +
      `Some landlords may not accept applications with more than 1/3 of gross income on rent, which is $${recommendedMinRent.toFixed(2)}.`
    );
  };

  const clearFields = () => {
    setIncome('');
    setIncomePeriod('perMonth');
    setDebtPayback('');
    setResult('');
  };

  return (
    <div className="App">
      <div className="calculator">
        <h1 className="title">Incorrect Rent Calculator</h1>
        <div className="input-group">
          <label className="label">Your pre-tax income:</label>
          <input
            type="number"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
            placeholder="Enter your pre-tax income"
            className="input"
          />
          <select
            value={incomePeriod}
            onChange={(e) => setIncomePeriod(e.target.value)}
            className="select"
          >
            <option value="perMonth">per month</option>
            <option value="perYear">per year</option>
          </select>
        </div>
        <div className="input-group">
          <label className="label">Your monthly debt payback:</label>
          <input
            type="number"
            value={debtPayback}
            onChange={(e) => setDebtPayback(e.target.value)}
            placeholder="Enter your monthly debt payback"
            className="input"
          />
        </div>
        <button onClick={calculateRentAffordability} className="calculate-button">
          Calculate
        </button>
        <button onClick={clearFields} className="clear-button">
          Clear
        </button>
        <div className="result">{result}</div>
      </div>
    </div>
  );
};

export default RentCalculator;

