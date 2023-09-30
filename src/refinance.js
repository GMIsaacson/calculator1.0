import React, { useState } from "react";
import "./Calculator.css";

const RefinanceCalculator = () => {
  const [remainingBalance, setRemainingBalance] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState("");
  const [interestRateCurrent, setInterestRateCurrent] = useState("");
  const [loanTermCurrent, setLoanTermCurrent] = useState("");
  const [interestRateNew, setInterestRateNew] = useState("");
  const [loanTermNew, setLoanTermNew] = useState("");
  const [points, setPoints] = useState("");
  const [costsAndFees, setCostsAndFees] = useState("");
  const [cashOutAmount, setCashOutAmount] = useState("");
  const [result, setResult] = useState("");
  const calculateRefinance = () => {
    // Convert percentage to decimal
    const currentInterestRate = parseFloat(interestRateCurrent) / 100;
    const newInterestRate = parseFloat(interestRateNew) / 100;

    // Calculate new monthly payment
    const newMonthlyPayment = calculateMonthlyPayment(
      parseFloat(remainingBalance),
      parseFloat(loanTermNew),
      newInterestRate
    );

    // Calculate the difference in monthly payments
    const monthlyPaymentDifference =
      parseFloat(monthlyPayment) - newMonthlyPayment;

    // Calculate other metrics based on the provided example (simplified)
    const monthsFasterPayoff = calculateMonthsFasterPayoff(
      parseFloat(remainingBalance),
      parseFloat(loanTermCurrent),
      parseFloat(loanTermNew),
      currentInterestRate,
      newInterestRate
    );

    const lifetimeSavings = calculateLifetimeSavings(
      parseFloat(monthsFasterPayoff),
      parseFloat(monthlyPaymentDifference)
    );

    const breakEvenPoint = calculateBreakEvenPoint(
      parseFloat(costsAndFees),
      parseFloat(monthlyPaymentDifference)
    );

    // Set the results
    setResult(`
      APR for the new loan is ${(newInterestRate * 100).toFixed(
        3
      )}%, which is ${((currentInterestRate - newInterestRate) * 100).toFixed(
      3
    )}% lower than the ${interestRateCurrent}% interest rate of the current loan. Refinancing would be financially less expensive.
  
      New monthly payment: $${newMonthlyPayment.toFixed(2)}
  
      $${Math.abs(monthlyPaymentDifference).toFixed(
        2
      )}/month savings in monthly pay
      ${monthsFasterPayoff} months faster the loan will be paid off
      $${lifetimeSavings.toFixed(2)} lifetime savings for the new loan
      $${parseFloat(costsAndFees).toFixed(2)} upfront cost
      Break-even point: ${breakEvenPoint} months
  
      \tCurrent loan (remaining)\tNew loan\tDifference
      Principal/loan amount\t$${parseFloat(remainingBalance).toFixed(
        2
      )}\t$${parseFloat(remainingBalance).toFixed(2)}\t$0.00
      Monthly pay\t$${parseFloat(monthlyPayment).toFixed(
        2
      )}\t$${newMonthlyPayment.toFixed(2)}\t$${monthlyPaymentDifference.toFixed(
      2
    )}
      Length\t${parseFloat(loanTermCurrent)} months\t${parseFloat(
      loanTermNew
    )} months\t${parseFloat(loanTermCurrent) - parseFloat(loanTermNew)} months
      Interest rate/APR\t${parseFloat(interestRateCurrent).toFixed(3)}%\t${(
      newInterestRate * 100
    ).toFixed(3)}%\t${((currentInterestRate - newInterestRate) * 100).toFixed(
      3
    )}%
      Total monthly payments\t$${(
        parseFloat(monthlyPayment) * parseFloat(loanTermCurrent)
      ).toFixed(2)}\t$${(newMonthlyPayment * parseFloat(loanTermNew)).toFixed(
      2
    )}\t$${(
      parseFloat(monthlyPayment) * parseFloat(loanTermCurrent) -
      newMonthlyPayment * parseFloat(loanTermNew)
    ).toFixed(2)}
      Total interest\t$${(
        parseFloat(monthlyPayment) * parseFloat(loanTermCurrent) -
        parseFloat(remainingBalance)
      ).toFixed(2)}\t$${(
      newMonthlyPayment * parseFloat(loanTermNew) -
      parseFloat(remainingBalance)
    ).toFixed(2)}\t$${(
      parseFloat(monthlyPayment) * parseFloat(loanTermCurrent) -
      parseFloat(remainingBalance) -
      (newMonthlyPayment * parseFloat(loanTermNew) -
        parseFloat(remainingBalance))
    ).toFixed(2)}
      Cost + points (upfront)\t$0\t$${parseFloat(costsAndFees).toFixed(2)}\t
      Time to recover cost/point\tNA\t${breakEvenPoint}\t
    `);
  };

  const calculateMonthlyPayment = (loanAmount, loanTerm, interestRate) => {
    // Simple monthly payment calculation for demonstration purposes
    const monthlyInterestRate = interestRate / 12;
    const numberOfPayments = loanTerm * 12;
    return (
      (loanAmount * monthlyInterestRate) /
      (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments))
    );
  };

  const calculateMonthsFasterPayoff = (
    currentRemainingBalance,
    currentLoanTerm,
    newLoanTerm,
    currentInterestRate,
    newInterestRate
  ) => {
    // Simplified calculation of months faster payoff
    const currentMonthlyPayment =
      (currentInterestRate * currentRemainingBalance) /
      (1 - Math.pow(1 + currentInterestRate, -currentLoanTerm));
    const newMonthlyPayment =
      (newInterestRate * currentRemainingBalance) /
      (1 - Math.pow(1 + newInterestRate, -newLoanTerm));
    return Math.ceil(
      (currentLoanTerm * currentMonthlyPayment -
        newLoanTerm * newMonthlyPayment) /
        newMonthlyPayment
    );
  };

  const calculateLifetimeSavings = (
    monthsFasterPayoff,
    monthlyPaymentDifference
  ) => {
    return monthsFasterPayoff * Math.abs(monthlyPaymentDifference);
  };

  const calculateBreakEvenPoint = (costsAndFees, monthlyPaymentDifference) => {
    return Math.ceil(costsAndFees / Math.abs(monthlyPaymentDifference));
  };

  const clearFields = () => {
    setRemainingBalance("");
    setMonthlyPayment("");
    setInterestRateCurrent("");
    setLoanTermCurrent("");
    setInterestRateNew("");
    setPoints("");
    setCostsAndFees("");
    setCashOutAmount("");
    setResult("");
  };

  return (
    <div className="App">
      <div className="calculator">
        <h1 className="title">Refinance Calculator(slightly off)</h1>
        <div className="input-group">
          {/* Input fields for current loan */}
          <label>Current Loan</label>
          <select
            value={remainingBalance}
            onChange={(e) => setRemainingBalance(e.target.value)}
          >
            <option value="remainingBalance">
              I know my remaining balance
            </option>
            <option value="originalLoanAmount">
              I know the original loan amount
            </option>
          </select>
        </div>
        <div className="input-group">
          <label>Remaining Balance:</label>
          <input
            type="text"
            value={remainingBalance}
            onChange={(e) => setRemainingBalance(e.target.value)}
            placeholder="$250,000"
          />
        </div>
        <div className="input-group">
          <label>Monthly Payment:</label>
          <input
            type="text"
            value={monthlyPayment}
            onChange={(e) => setMonthlyPayment(e.target.value)}
            placeholder="$1,800"
          />
        </div>
        <div className="input-group">
          <label>Interest Rate:</label>
          <input
            type="text"
            value={interestRateCurrent}
            onChange={(e) => setInterestRateCurrent(e.target.value)}
            placeholder="7%"
          />
        </div>
        {/* Add more input fields as per your requirements */}
        <div className="input-group">
          <label>New Loan</label>
        </div>
        <div className="input-group">
          <label>New Loan Term:</label>
          <input
            type="text"
            value={loanTermNew}
            onChange={(e) => setLoanTermNew(e.target.value)}
            placeholder="20 years"
          />
        </div>
        <div className="input-group">
          <label>Interest Rate:</label>
          <input
            type="text"
            value={interestRateNew}
            onChange={(e) => setInterestRateNew(e.target.value)}
            placeholder="6%"
          />
        </div>
        <div className="input-group">
          <label>Points:</label>
          <input
            type="text"
            value={points}
            onChange={(e) => setPoints(e.target.value)}
            placeholder="2"
          />
        </div>
        <div className="input-group">
          <label>Costs and Fees:</label>
          <input
            type="text"
            value={costsAndFees}
            onChange={(e) => setCostsAndFees(e.target.value)}
            placeholder="$1500"
          />
        </div>
        <div className="input-group">
          <label>Cash Out Amount:</label>
          <input
            type="text"
            value={cashOutAmount}
            onChange={(e) => setCashOutAmount(e.target.value)}
            placeholder="$0"
          />
        </div>

        <button onClick={calculateRefinance} className="calculate-button">
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

export default RefinanceCalculator;
