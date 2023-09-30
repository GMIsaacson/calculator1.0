import React, { useState } from "react";
import "./Calculator.css";

const MortgagePayoffCalculator = () => {
  const [originalLoanAmount, setOriginalLoanAmount] = useState("");
  const [originalLoanTerm, setOriginalLoanTerm] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [remainingTermYears, setRemainingTermYears] = useState("");
  const [remainingTermMonths, setRemainingTermMonths] = useState("");
  const [extraPaymentPerMonth, setExtraPaymentPerMonth] = useState("");
  const [extraPaymentPerYear, setExtraPaymentPerYear] = useState("");
  const [extraPaymentOneTime, setExtraPaymentOneTime] = useState("");
  const [repaymentOption, setRepaymentOption] = useState("");
  const [result, setResult] = useState("");
  const [steps, setSteps] = useState("");

  const calculateMortgagePayoff = () => {
    // Parse input values to numbers
    const loanAmount = parseFloat(originalLoanAmount);
    const loanTermYears = parseFloat(originalLoanTerm);
    const interestRatePercent = parseFloat(interestRate);
    const remainingYears = parseFloat(remainingTermYears);
    const remainingMonths = parseFloat(remainingTermMonths);
    const extraPerMonth = parseFloat(extraPaymentPerMonth);
    const extraPerYear = parseFloat(extraPaymentPerYear);
    const extraOneTime = parseFloat(extraPaymentOneTime);

    // Calculate monthly interest rate
    const monthlyInterestRate = interestRatePercent / 12 / 100;

    // Calculate total months for the original loan term
    const totalMonths = loanTermYears * 12;

    // Calculate the remaining months
    const totalRemainingMonths = remainingYears * 12 + remainingMonths;

    // Calculate the remaining balance without any extra payments
    let remainingBalance =
      loanAmount * (1 + monthlyInterestRate) ** totalMonths;

    // Calculate monthly payment without any extra payments
    const monthlyPayment = remainingBalance / totalMonths;

    // Calculate the payoff months and years
    const payoffMonths = totalMonths - totalRemainingMonths;
    const payoffYears = Math.floor(payoffMonths / 12);
    const payoffMonthsRemainder = payoffMonths % 12;

    // Calculate the new remaining balance with extra payments
    const newRemainingBalance =
      remainingBalance - extraPerMonth * totalRemainingMonths;

    // Calculate the savings in interest
    const originalInterest = remainingBalance - loanAmount;
    const newInterest = newRemainingBalance - loanAmount;
    const interestSavings = originalInterest - newInterest;

    // Display the result
    setResult(
      `Payoff in ${payoffYears} years and ${payoffMonthsRemainder} months`
    );
    setSteps(
      `The remaining balance is $${newRemainingBalance.toFixed(
        2
      )}. By paying extra $${extraPerMonth.toFixed(
        2
      )} per month starting now, the loan will be paid off in ${payoffYears} years and ${payoffMonthsRemainder} months. It is ${
        payoffYears > 0 ? `${payoffYears} years and ` : ""
      }${payoffMonthsRemainder} months earlier. This results in savings of $${interestSavings.toFixed(
        2
      )} in interest.`
    );
  };

  const clearFields = () => {
    setOriginalLoanAmount("");
    setOriginalLoanTerm("");
    setInterestRate("");
    setRemainingTermYears("");
    setRemainingTermMonths("");
    setExtraPaymentPerMonth("");
    setExtraPaymentPerYear("");
    setExtraPaymentOneTime("");
    setRepaymentOption("");
    setResult("");
    setSteps("");
  };

  return (
    <div className="App">
      <div className="calculator">
        <h1 className="title"> Incorrect Mortgage Payoff Calculator</h1>

        {/* Input fields for original loan details */}
        <div className="input-group">
          <label>Original Loan Amount:</label>
          <input
            type="number"
            value={originalLoanAmount}
            onChange={(e) => setOriginalLoanAmount(e.target.value)}
            placeholder="Enter original loan amount"
          />
        </div>

        <div className="input-group">
          <label>Original Loan Term (years):</label>
          <input
            type="number"
            value={originalLoanTerm}
            onChange={(e) => setOriginalLoanTerm(e.target.value)}
            placeholder="Enter original loan term in years"
          />
        </div>

        <div className="input-group">
          <label>Interest Rate (%):</label>
          <input
            type="number"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            placeholder="Enter interest rate"
          />
        </div>

        {/* Input fields for remaining term */}
        <div className="input-group">
          <label>Remaining Term (years):</label>
          <input
            type="number"
            value={remainingTermYears}
            onChange={(e) => setRemainingTermYears(e.target.value)}
            placeholder="Enter remaining term in years"
          />
        </div>

        <div className="input-group">
          <label>Remaining Term (months):</label>
          <input
            type="number"
            value={remainingTermMonths}
            onChange={(e) => setRemainingTermMonths(e.target.value)}
            placeholder="Enter remaining term in months"
          />
        </div>

        {/* Input fields for repayment options */}
        <div className="input-group">
          <label>Repayment Options:</label>
          <div>
            <input
              type="radio"
              id="paybackAltogether"
              name="repaymentOption"
              value="paybackAltogether"
              checked={repaymentOption === "paybackAltogether"}
              onChange={() => setRepaymentOption("paybackAltogether")}
            />
            <label htmlFor="paybackAltogether">Payback Altogether</label>
          </div>

          <div>
            <input
              type="radio"
              id="repaymentExtraPerMonth"
              name="repaymentOption"
              value="repaymentExtraPerMonth"
              checked={repaymentOption === "repaymentExtraPerMonth"}
              onChange={() => setRepaymentOption("repaymentExtraPerMonth")}
            />
            <label htmlFor="repaymentExtraPerMonth">
              Repayment with Extra Payments Per Month
            </label>
            <input
              type="number"
              value={extraPaymentPerMonth}
              onChange={(e) => setExtraPaymentPerMonth(e.target.value)}
              placeholder="Enter extra payment per month"
            />
          </div>

          <div>
            <input
              type="radio"
              id="repaymentExtraPerYear"
              name="repaymentOption"
              value="repaymentExtraPerYear"
              checked={repaymentOption === "repaymentExtraPerYear"}
              onChange={() => setRepaymentOption("repaymentExtraPerYear")}
            />
            <label htmlFor="repaymentExtraPerYear">
              Repayment with Extra Payments Per Year
            </label>
            <input
              type="number"
              value={extraPaymentPerYear}
              onChange={(e) => setExtraPaymentPerYear(e.target.value)}
              placeholder="Enter extra payment per year"
            />
          </div>

          <div>
            <input
              type="radio"
              id="repaymentOneTime"
              name="repaymentOption"
              value="repaymentOneTime"
              checked={repaymentOption === "repaymentOneTime"}
              onChange={() => setRepaymentOption("repaymentOneTime")}
            />
            <label htmlFor="repaymentOneTime">
              Repayment with One-Time Extra Payment
            </label>
            <input
              type="number"
              value={extraPaymentOneTime}
              onChange={(e) => setExtraPaymentOneTime(e.target.value)}
              placeholder="Enter one-time extra payment"
            />
          </div>

          <div>
            <input
              type="radio"
              id="biweeklyRepayment"
              name="repaymentOption"
              value="biweeklyRepayment"
              checked={repaymentOption === "biweeklyRepayment"}
              onChange={() => setRepaymentOption("biweeklyRepayment")}
            />
            <label htmlFor="biweeklyRepayment">Biweekly Repayment</label>
          </div>

          <div>
            <input
              type="radio"
              id="normalRepayment"
              name="repaymentOption"
              value="normalRepayment"
              checked={repaymentOption === "normalRepayment"}
              onChange={() => setRepaymentOption("normalRepayment")}
            />
            <label htmlFor="normalRepayment">Normal Repayment</label>
          </div>
        </div>

        <button onClick={calculateMortgagePayoff} className="calculate-button">
          Calculate
        </button>
        <button onClick={clearFields} className="clear-button">
          Clear
        </button>

        <div className="steps">{steps}</div>
        <div className="result">{result}</div>
      </div>
    </div>
  );
};

export default MortgagePayoffCalculator;
