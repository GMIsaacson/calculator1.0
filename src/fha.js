import React, { useState } from "react";
import "./Calculator.css";
import { useEffect } from "react";

const FhaLoanCalculator = () => {
  const [homePrice, setHomePrice] = useState("");
  const [downPaymentPercentage, setDownPaymentPercentage] = useState("");
  const [downPaymentType, setDownPaymentType] = useState("%");
  const [loanTerm, setLoanTerm] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [upfrontFhaMip, setUpfrontFhaMip] = useState("");
  const [annualFhaMip, setAnnualFhaMip] = useState("");
  const [annualFhaMipDuration, setAnnualFhaMipDuration] = useState("");
  const [includePropertyTax, setIncludePropertyTax] = useState(false);
  const [propertyTax, setPropertyTax] = useState("");
  const [propertyTaxType, setPropertyTaxType] = useState("%");
  const [includeHomeInsurance, setIncludeHomeInsurance] = useState(false);
  const [homeInsurance, setHomeInsurance] = useState("");
  const [includeHoaFee, setIncludeHoaFee] = useState(false);
  const [hoaFee, setHoaFee] = useState("");
  const [includeOtherCosts, setIncludeOtherCosts] = useState(false);
  const [otherCosts, setOtherCosts] = useState("");
  const [startDateMonth, setStartDateMonth] = useState("");
  const [startDateYear, setStartDateYear] = useState("");
  const [monthsDropdown, setMonthsDropdown] = useState([]);
  const [results, setResults] = useState(null);
  const [startMonth, setStartMonth] = useState("");
  const [startYear, setStartYear] = useState("");

  useEffect(() => {
    // Initialize start date to the current month and year
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1; // Months are zero-based

    // Generate the months dropdown
    const months = Array.from({ length: 12 }, (_, index) => {
      const month = index + 1;
      return (
        <option key={month} value={month}>
          {new Date(0, month).toLocaleDateString("en", { month: "short" })}
        </option>
      );
    });

    setStartMonth(currentMonth);
    setStartYear(currentYear);

    // Set the initial options for the start date dropdown
    setMonthsDropdown(months);
  }, []);

  const handleCalculate = () => {
    // Convert percentages to decimals
    const downPayment =
      downPaymentType === "%"
        ? downPaymentPercentage / 100
        : downPaymentPercentage;
    const annualFhaMipDecimal = annualFhaMip / 100;
    const propertyTaxDecimal =
      propertyTaxType === "%" ? propertyTax / 100 : propertyTax;
    const interestRateDecimal = interestRate / 100;

    // Calculate loan amount (principal) after down payment
    const principal =
      homePrice -
      (downPaymentType === "%" ? homePrice * downPayment : downPayment);

    // Calculate monthly interest rate
    const monthlyInterestRate = interestRateDecimal / 12;

    // Calculate total number of payments
    const totalPayments = loanTerm * 12;

    // Monthly Payment calculation
    const monthlyPayment =
      (principal * monthlyInterestRate) /
      (1 - Math.pow(1 + monthlyInterestRate, -totalPayments));

    // TODO: Add other calculations based on the provided formula

    // Set the results
    setResults({
      monthlyPayment
      // Add other result calculations here
    });
  };

  const handleClear = () => {
    setHomePrice("");
    setDownPaymentPercentage("");
    setDownPaymentType("%");
    setLoanTerm("");
    setInterestRate("");
    setUpfrontFhaMip("");
    setAnnualFhaMip("");
    setAnnualFhaMipDuration("");
    setIncludePropertyTax(false);
    setPropertyTax("");
    setPropertyTaxType("%");
    setIncludeHomeInsurance(false);
    setHomeInsurance("");
    setIncludeHoaFee(false);
    setHoaFee("");
    setIncludeOtherCosts(false);
    setOtherCosts("");
    setStartMonth("");
    setStartYear("");
    setResults(null);
  };

  return (
    <div className="App">
      <div className="calculator">
        <h1 className="title">(slightly off) FHA Loan Calculator</h1>
        <div className="input-group">
          <label>Home Price:</label>
          <input
            type="text"
            value={homePrice}
            onChange={(e) => setHomePrice(e.target.value)}
            placeholder="$500,000"
          />
        </div>
        <div className="input-group">
          <label>Down Payment:</label>
          <input
            type="text"
            value={downPaymentPercentage}
            onChange={(e) => setDownPaymentPercentage(e.target.value)}
            placeholder="3.5"
          />
          <select
            value={downPaymentType}
            onChange={(e) => setDownPaymentType(e.target.value)}
          >
            <option value="%">%</option>
            <option value="$">$</option>
          </select>
        </div>
        <div className="input-group">
          <label>Loan Term:</label>
          <input
            type="text"
            value={loanTerm}
            onChange={(e) => setLoanTerm(e.target.value)}
            placeholder="30"
          />
          <span>years</span>
        </div>
        <div className="input-group">
          <label>Interest Rate:</label>
          <input
            type="text"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            placeholder="7.03"
          />
          <span>%</span>
        </div>
        <div className="input-group">
          <label>Upfront FHA MIP:</label>
          <input
            type="text"
            value={upfrontFhaMip}
            onChange={(e) => setUpfrontFhaMip(e.target.value)}
            placeholder="1.75"
          />
          <span>%</span>
        </div>
        <div className="input-group">
          <label>Annual FHA MIP:</label>
          <input
            type="text"
            value={annualFhaMip}
            onChange={(e) => setAnnualFhaMip(e.target.value)}
            placeholder="0.55"
          />
          <span>%</span>
        </div>
        <div className="input-group">
          <label>Annual FHA MIP Duration:</label>
          <select
            value={annualFhaMipDuration}
            onChange={(e) => setAnnualFhaMipDuration(e.target.value)}
          >
            <option value="">Select</option>
            <option value="loan term">Loan Term</option>
            <option value="11 years">11 years</option>
            <option value="5 years">5 years</option>
            <option value="78% LTV">78% LTV</option>
            <option value="No Annual MIP">No Annual MIP</option>
          </select>
        </div>
        <div className="input-group">
          <label>
            Include Property Taxes:
            <input
              type="checkbox"
              checked={includePropertyTax}
              onChange={(e) => setIncludePropertyTax(e.target.checked)}
            />
          </label>
        </div>
        {includePropertyTax && (
          <div className="input-group">
            <label>Property Taxes:</label>
            <input
              type="text"
              value={propertyTax}
              onChange={(e) => setPropertyTax(e.target.value)}
              placeholder="1.2"
            />
            <select
              value={propertyTaxType}
              onChange={(e) => setPropertyTaxType(e.target.value)}
            >
              <option value="%">%</option>
              <option value="$">$</option>
            </select>
          </div>
        )}
        <div className="input-group">
          <label>
            Include Home Insurance:
            <input
              type="checkbox"
              checked={includeHomeInsurance}
              onChange={(e) => setIncludeHomeInsurance(e.target.checked)}
            />
          </label>
        </div>
        {includeHomeInsurance && (
          <div className="input-group">
            <label>Home Insurance:</label>
            <input
              type="text"
              value={homeInsurance}
              onChange={(e) => setHomeInsurance(e.target.value)}
              placeholder="$2500/year"
            />
          </div>
        )}
        <div className="input-group">
          <label>
            Include HOA Fee:
            <input
              type="checkbox"
              checked={includeHoaFee}
              onChange={(e) => setIncludeHoaFee(e.target.checked)}
            />
          </label>
        </div>
        {includeHoaFee && (
          <div className="input-group">
            <label>HOA Fee:</label>
            <input
              type="text"
              value={hoaFee}
              onChange={(e) => setHoaFee(e.target.value)}
              placeholder="$0/year"
            />
          </div>
        )}
        <div className="input-group">
          <label>
            Include Other Costs:
            <input
              type="checkbox"
              checked={includeOtherCosts}
              onChange={(e) => setIncludeOtherCosts(e.target.checked)}
            />
          </label>
        </div>
        {includeOtherCosts && (
          <div className="input-group">
            <label>Other Costs:</label>
            <input
              type="text"
              value={otherCosts}
              onChange={(e) => setOtherCosts(e.target.value)}
              placeholder="$5000/year"
            />
          </div>
        )}

        <div className="input-group">
          <label>Start Date:</label>
          <select
            value={startMonth}
            onChange={(e) => setStartMonth(e.target.value)}
          >
            {monthsDropdown}
          </select>
          <input
            type="number"
            value={startYear}
            onChange={(e) => setStartYear(e.target.value)}
            placeholder="Year"
          />
        </div>

        <button onClick={handleCalculate} className="calculate-button">
          Calculate
        </button>
        <button onClick={handleClear} className="clear-button">
          Clear
        </button>
        <div className="results">
          {results && (
            <>
              <h2>Results</h2>
              <p>Monthly Payment: ${results.monthlyPayment.toFixed(2)}</p>
              {/* Add other result elements here */}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default FhaLoanCalculator;
