import React, { useState } from "react";
import "./Calculator.css";

const RentVsBuyCalculator = () => {
  //const [homePrice, setHomePrice] = useState('');
  const [rentalFeeIncrease, setRentalFeeIncrease] = useState("");
  const [homePrice, setHomePrice] = useState("");
  const [downPayment, setDownPayment] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanTerm, setLoanTerm] = useState("");
  const [buyingClosingCosts, setBuyingClosingCosts] = useState("");
  const [propertyTax, setPropertyTax] = useState("");
  const [propertyTaxIncrease, setPropertyTaxIncrease] = useState("");
  const [homeInsurance, setHomeInsurance] = useState("");
  const [hoaFee, setHoaFee] = useState("");
  const [maintenanceCost, setMaintenanceCost] = useState("");
  const [homeValueAppreciation, setHomeValueAppreciation] = useState("");
  const [costInsuranceIncrease, setCostInsuranceIncrease] = useState("");
  const [sellingClosingCosts, setSellingClosingCosts] = useState("");
  const [homePrice2, setHomePrice2] = useState("");
  const [rentalFeeIncrease2, setRentalFeeIncrease2] = useState("");
  const [rentersInsurance, setRentersInsurance] = useState("");
  const [securityDeposit, setSecurityDeposit] = useState("");
  const [upfrontCost, setUpfrontCost] = useState("");
  const [averageInvestmentReturn, setAverageInvestmentReturn] = useState("");
  const [marginalFederalTaxRate, setMarginalFederalTaxRate] = useState("");
  const [marginalStateTaxRate, setMarginalStateTaxRate] = useState("");
  const [taxFilingStatus, setTaxFilingStatus] = useState(
    "married_filing_jointly"
  );
  // ... other input states

  const calculateResults = () => {
    // Calculate the results based on the provided inputs
    // ...
    // Update the results state
    // ...
  };

  const clearFields = () => {
    setHomePrice("");
    setDownPayment("");
    setInterestRate("");
    setLoanTerm("");
    setBuyingClosingCosts("");
    setPropertyTax("");
    setPropertyTaxIncrease("");
    setHomeInsurance("");
    setHoaFee("");
    setMaintenanceCost("");
    setHomeValueAppreciation("");
    setCostInsuranceIncrease("");
    setSellingClosingCosts("");

    // Clear additional fields in column 2
    setHomePrice2("");
    setRentalFeeIncrease2("");
    setRentersInsurance("");
    setSecurityDeposit("");
    setUpfrontCost("");
    setAverageInvestmentReturn("");
    setMarginalFederalTaxRate("");
    setMarginalStateTaxRate("");
    setTaxFilingStatus("married_filing_jointly");
  };

  return (
    <div className="App">
      <div className="calculator">
        <h1 className="title">
          (Shell no calculate function)Rent vs. Buy Calculator
        </h1>
        <div className="input-group">
          <label>Home price:</label>
          <input
            type="number"
            value={homePrice}
            onChange={(e) => setHomePrice(e.target.value)}
            placeholder="$500,000"
          />
        </div>
        <div className="input-group">
          <label>Down Payment:</label>
          <input
            type="number"
            value={downPayment}
            onChange={(e) => setDownPayment(e.target.value)}
            placeholder="20%"
          />
        </div>
        <div className="input-group">
          <label>Interest Rate:</label>
          <input
            type="number"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            placeholder="7.03%"
          />
        </div>
        <div className="input-group">
          <label>Loan Term:</label>
          <input
            type="number"
            value={loanTerm}
            onChange={(e) => setLoanTerm(e.target.value)}
            placeholder="30 years"
          />
        </div>
        <div className="input-group">
          <label>Buying Closing Costs:</label>
          <input
            type="number"
            value={buyingClosingCosts}
            onChange={(e) => setBuyingClosingCosts(e.target.value)}
            placeholder="2%"
          />
        </div>
        {/* Add more input fields based on the requirements */}
        <div className="input-group">
          <label>Property tax:</label>
          <input
            type="number"
            value={propertyTax}
            onChange={(e) => setPropertyTax(e.target.value)}
            placeholder="1.5%"
          />
        </div>
        <div className="input-group">
          <label>Property tax increase:</label>
          <input
            type="number"
            value={propertyTaxIncrease}
            onChange={(e) => setPropertyTaxIncrease(e.target.value)}
            placeholder="3%"
          />
        </div>
        <div className="input-group">
          <label>Home insurance:</label>
          <input
            type="number"
            value={homeInsurance}
            onChange={(e) => setHomeInsurance(e.target.value)}
            placeholder="$2500"
          />
        </div>
        <div className="input-group">
          <label>HOA fee:</label>
          <input
            type="number"
            value={hoaFee}
            onChange={(e) => setHoaFee(e.target.value)}
            placeholder="$0"
          />
        </div>
        <div className="input-group">
          <label>Maintenance Cost:</label>
          <input
            type="number"
            value={maintenanceCost}
            onChange={(e) => setMaintenanceCost(e.target.value)}
            placeholder="1.5%"
          />
        </div>
        <div className="input-group">
          <label>Home value appreciation:</label>
          <input
            type="number"
            value={homeValueAppreciation}
            onChange={(e) => setHomeValueAppreciation(e.target.value)}
            placeholder="3%"
          />
        </div>
        <div className="input-group">
          <label>Cost/Insurance increase:</label>
          <input
            type="number"
            value={costInsuranceIncrease}
            onChange={(e) => setCostInsuranceIncrease(e.target.value)}
            placeholder="3%"
          />
        </div>
        <div className="input-group">
          <label>Selling closing costs:</label>
          <input
            type="number"
            value={sellingClosingCosts}
            onChange={(e) => setSellingClosingCosts(e.target.value)}
            placeholder="7%"
          />
        </div>
        // ... inside the RentVsBuyCalculator component
        <div className="input-group">
          <label>Home price:</label>
          <input
            type="number"
            value={homePrice2}
            onChange={(e) => setHomePrice2(e.target.value)}
            placeholder="$500,000"
          />
        </div>
        <div className="input-group">
          <label>Rental fee increase:</label>
          <input
            type="number"
            value={rentalFeeIncrease2}
            onChange={(e) => setRentalFeeIncrease2(e.target.value)}
            placeholder="3%"
          />
        </div>
        <div className="input-group">
          <label>Renter's Insurance:</label>
          <input
            type="number"
            value={rentersInsurance}
            onChange={(e) => setRentersInsurance(e.target.value)}
            placeholder="$15"
          />
        </div>
        <div className="input-group">
          <label>Security deposit:</label>
          <input
            type="number"
            value={securityDeposit}
            onChange={(e) => setSecurityDeposit(e.target.value)}
            placeholder="$3000"
          />
        </div>
        <div className="input-group">
          <label>Upfront cost:</label>
          <input
            type="number"
            value={upfrontCost}
            onChange={(e) => setUpfrontCost(e.target.value)}
            placeholder="$100"
          />
        </div>
        {/* Your Information */}
        <div className="input-group">
          <label>Average investment return:</label>
          <input
            type="number"
            value={averageInvestmentReturn}
            onChange={(e) => setAverageInvestmentReturn(e.target.value)}
            placeholder="5%"
          />
        </div>
        <div className="input-group">
          <label>Marginal federal tax rate:</label>
          <input
            type="number"
            value={marginalFederalTaxRate}
            onChange={(e) => setMarginalFederalTaxRate(e.target.value)}
            placeholder="25%"
          />
        </div>
        <div className="input-group">
          <label>Marginal state tax rate:</label>
          <input
            type="number"
            value={marginalStateTaxRate}
            onChange={(e) => setMarginalStateTaxRate(e.target.value)}
            placeholder="0%"
          />
        </div>
        <div className="input-group">
          <label>Tax filing status:</label>
          <select
            value={taxFilingStatus}
            onChange={(e) => setTaxFilingStatus(e.target.value)}
          >
            <option value="married_filing_jointly">
              Married Filing Jointly
            </option>
            <option value="married_filing_separately">
              Married Filing Separately
            </option>
            <option value="head_of_household">Head of Household</option>
            <option value="qualified_widow">Qualified Widow</option>
          </select>
        </div>
        <div className="input-group">{/* Input fields for column 2 */}</div>
        <button onClick={calculateResults} className="calculate-button">
          Calculate
        </button>
        {/* Results display */}
        <button onClick={clearFields} className="clear-button">
          Clear
        </button>
      </div>
    </div>
  );
};

export default RentVsBuyCalculator;
