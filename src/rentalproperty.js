import React, { useState } from "react";
import "./Calculator.css";

const RentalPropertyCalculator = () => {
  // State for input values

  const [purchasePrice, setPurchasePrice] = useState("");
  const [useLoan, setUseLoan] = useState(false);
  const [downPayment, setDownPayment] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanTerm, setLoanTerm] = useState("");
  const [closingCost, setClosingCost] = useState("");
  const [needRepairs, setNeedRepairs] = useState(false);
  const [propertyTax, setPropertyTax] = useState("");
  const [propertyTaxIncrease, setPropertyTaxIncrease] = useState("");
  const [totalInsurance, setTotalInsurance] = useState("");
  const [totalInsuranceIncrease, setTotalInsuranceIncrease] = useState("");
  const [hoaFee, setHoaFee] = useState("");
  const [hoaFeeIncrease, setHoaFeeIncrease] = useState("");
  const [maintenance, setMaintenance] = useState("");
  const [maintenanceIncrease, setMaintenanceIncrease] = useState("");
  const [otherCosts, setOtherCosts] = useState("");
  const [otherCostsIncrease, setOtherCostsIncrease] = useState("");
  const [monthlyRent, setMonthlyRent] = useState("");
  const [monthlyRentIncrease, setMonthlyRentIncrease] = useState("");
  const [otherMonthlyIncome, setOtherMonthlyIncome] = useState("");
  const [otherMonthlyIncomeIncrease, setOtherMonthlyIncomeIncrease] = useState(
    ""
  );
  const [vacancyRate, setVacancyRate] = useState("");
  const [managementFee, setManagementFee] = useState("");
  const [knowSellPrice, setKnowSellPrice] = useState(false);
  const [valueAppreciation, setValueAppreciation] = useState("");
  const [holdingLength, setHoldingLength] = useState("");
  const [costToSell, setCostToSell] = useState("");
  const [results, setResults] = useState("");
  // ... Add state for other input fields

  // Function to handle calculation based on input values
  const calculate = () => {
    // Perform necessary calculations here
    // Update the state for results or steps
  };

  const clearFields = () => {
    setPurchasePrice("");
    setUseLoan(false);
    setDownPayment("");
    setInterestRate("");
    setLoanTerm("");
    setClosingCost("");
    setNeedRepairs(false);
    setPropertyTax("");
    setPropertyTaxIncrease("");
    setTotalInsurance("");
    setTotalInsuranceIncrease("");
    setHoaFee("");
    setHoaFeeIncrease("");
    setMaintenance("");
    setMaintenanceIncrease("");
    setOtherCosts("");
    setOtherCostsIncrease("");
    setMonthlyRent("");
    setMonthlyRentIncrease("");
    setOtherMonthlyIncome("");
    setOtherMonthlyIncomeIncrease("");
    setVacancyRate("");
    setManagementFee("");
    setKnowSellPrice(false);
    setValueAppreciation("");
    setHoldingLength("");
    setCostToSell("");
    setResults("");
  };

  return (
    <div className="App">
      <h1>(calculator not built)Rental Property Calculator</h1>
      {/* Purchase Section */}
      <h2>Purchase</h2>
      <label>Purchase Price: </label>
      <input
        type="number"
        value={purchasePrice}
        onChange={(e) => setPurchasePrice(e.target.value)}
        placeholder="Enter purchase price ($200,000)"
      />
      <label>Use Loan?</label>
      <input
        type="radio"
        checked={useLoan}
        onChange={() => setUseLoan(!useLoan)}
      />{" "}
      Yes
      <input
        type="radio"
        checked={!useLoan}
        onChange={() => setUseLoan(!useLoan)}
      />{" "}
      No
      <label>Down Payment: </label>
      <input
        type="text"
        value={downPayment}
        onChange={(e) => setDownPayment(e.target.value)}
        placeholder="Enter down payment (20%)"
      />
      <label>Interest Rate: </label>
      <input
        type="number"
        value={interestRate}
        onChange={(e) => setInterestRate(e.target.value)}
        placeholder="Enter interest rate (6%)"
      />
      <label>Loan Term: </label>
      <input
        type="number"
        value={loanTerm}
        onChange={(e) => setLoanTerm(e.target.value)}
        placeholder="Enter loan term (30 years)"
      />
      <label>Closing Cost: </label>
      <input
        type="number"
        value={closingCost}
        onChange={(e) => setClosingCost(e.target.value)}
        placeholder="Enter closing cost ($6000)"
      />
      <label>Need Repairs?</label>
      <input
        type="radio"
        checked={needRepairs}
        onChange={() => setNeedRepairs(!needRepairs)}
      />{" "}
      Yes
      <input
        type="radio"
        checked={!needRepairs}
        onChange={() => setNeedRepairs(!needRepairs)}
      />{" "}
      No
      <br />
      {/* Recurring Operating Expenses Section */}
      <h2>Recurring Operating Expenses</h2>
      <label>Property Tax (Annual): </label>
      <input
        type="number"
        value={propertyTax}
        onChange={(e) => setPropertyTax(e.target.value)}
        placeholder="Enter property tax ($3000)"
      />
      <label>Annual Increase (%): </label>
      <input
        type="number"
        value={propertyTaxIncrease}
        onChange={(e) => setPropertyTaxIncrease(e.target.value)}
        placeholder="Enter annual increase (3%)"
      />
      <label>Total Insurance (Annual): </label>
      <input
        type="number"
        value={totalInsurance}
        onChange={(e) => setTotalInsurance(e.target.value)}
        placeholder="Enter total insurance ($1200)"
      />
      <label>Annual Increase (%): </label>
      <input
        type="number"
        value={totalInsuranceIncrease}
        onChange={(e) => setTotalInsuranceIncrease(e.target.value)}
        placeholder="Enter annual increase (3%)"
      />
      <label>HOA Fee (Annual): </label>
      <input
        type="number"
        value={hoaFee}
        onChange={(e) => setHoaFee(e.target.value)}
        placeholder="Enter HOA fee ($0)"
      />
      <label>Annual Increase (%): </label>
      <input
        type="number"
        value={hoaFeeIncrease}
        onChange={(e) => setHoaFeeIncrease(e.target.value)}
        placeholder="Enter annual increase (3%)"
      />
      <label>Maintenance (Annual): </label>
      <input
        type="number"
        value={maintenance}
        onChange={(e) => setMaintenance(e.target.value)}
        placeholder="Enter maintenance cost ($2000)"
      />
      <label>Annual Increase (%): </label>
      <input
        type="number"
        value={maintenanceIncrease}
        onChange={(e) => setMaintenanceIncrease(e.target.value)}
        placeholder="Enter annual increase (3%)"
      />
      <label>Other Costs (Annual): </label>
      <input
        type="number"
        value={otherCosts}
        onChange={(e) => setOtherCosts(e.target.value)}
        placeholder="Enter other costs ($500)"
      />
      <label>Annual Increase (%): </label>
      <input
        type="number"
        value={otherCostsIncrease}
        onChange={(e) => setOtherCostsIncrease(e.target.value)}
        placeholder="Enter annual increase (3%)"
      />
      <br />
      {/* Income Section */}
      <h2>Income</h2>
      <label>Monthly Rent (Annual): </label>
      <input
        type="number"
        value={monthlyRent}
        onChange={(e) => setMonthlyRent(e.target.value)}
        placeholder="Enter monthly rent ($3000)"
      />
      <label>Annual Increase (%): </label>
      <input
        type="number"
        value={monthlyRentIncrease}
        onChange={(e) => setMonthlyRentIncrease(e.target.value)}
        placeholder="Enter annual increase (3%)"
      />
      <label>Other Monthly Income (Annual): </label>
      <input
        type="number"
        value={otherMonthlyIncome}
        onChange={(e) => setOtherMonthlyIncome(e.target.value)}
        placeholder="Enter other monthly income ($0)"
      />
      <label>Annual Increase (%): </label>
      <input
        type="number"
        value={otherMonthlyIncomeIncrease}
        onChange={(e) => setOtherMonthlyIncomeIncrease(e.target.value)}
        placeholder="Enter annual increase (3%)"
      />
      <label>Vacancy Rate: </label>
      <input
        type="number"
        value={vacancyRate}
        onChange={(e) => setVacancyRate(e.target.value)}
        placeholder="Enter vacancy rate (5%)"
      />
      <label>Management Fee: </label>
      <input
        type="number"
        value={managementFee}
        onChange={(e) => setManagementFee(e.target.value)}
        placeholder="Enter management fee (0%)"
      />
      <br />
      {/* Sell Section */}
      <h2>Sell</h2>
      <label>Do You Know the Sell Price?</label>
      <input
        type="radio"
        checked={knowSellPrice}
        onChange={() => setKnowSellPrice(!knowSellPrice)}
      />{" "}
      Yes
      <input
        type="radio"
        checked={!knowSellPrice}
        onChange={() => setKnowSellPrice(!knowSellPrice)}
      />{" "}
      No
      <label>Value Appreciation: </label>
      <input
        type="number"
        value={valueAppreciation}
        onChange={(e) => setValueAppreciation(e.target.value)}
        placeholder="Enter value appreciation (3%) per year"
      />
      <label>Holding Length: </label>
      <input
        type="number"
        value={holdingLength}
        onChange={(e) => setHoldingLength(e.target.value)}
        placeholder="Enter holding length (20 years)"
      />
      <label>Cost to Sell: </label>
      <input
        type="number"
        value={costToSell}
        onChange={(e) => setCostToSell(e.target.value)}
        placeholder="Enter cost to sell (8%)"
      />
      <br />
      {/* Calculate button */}
      <button onClick={calculate}>Calculate</button>
      {/* Display results or steps */}
      <div>
        <h2>Results:</h2>
        {results && <div>{results}</div>}
      </div>
      <button onClick={clearFields} className="clear-button">
        Clear
      </button>
    </div>
  );
};

export default RentalPropertyCalculator;
