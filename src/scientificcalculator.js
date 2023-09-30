import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [angleMode, setAngleMode] = useState("deg"); // Initialize with 'deg'

  const [ansValue, setAnsValue] = useState(null);

  const handleButtonClick = (value) => {
    if (value === "%") {
      try {
        // Split the input into parts separated by operators
        const parts = input.split(/([+\-*/])/);

        // Find the last numeric value
        let lastNumberIndex = -1;
        for (let i = parts.length - 1; i >= 0; i--) {
          if (!isNaN(parseFloat(parts[i]))) {
            lastNumberIndex = i;
            break;
          }
        }

        // Calculate the percentage and update the input
        if (lastNumberIndex !== -1) {
          const lastNumber = parts[lastNumberIndex];
          const percentage = (parseFloat(lastNumber) * 0.01).toString();
          parts[lastNumberIndex] = percentage;

          setInput(parts.join(""));
        } else {
          throw new Error("No numeric value found for percentage calculation");
        }
      } catch (error) {
        setInput("Error");
      }
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };

  const handleBackButtonClick = (value) => {
    if (value === "Back") {
      try {
        // Check if the input is not empty
        if (input.length > 0) {
          // Remove the last character from the input
          setInput((prevInput) => prevInput.slice(0, -1));
        } else {
          throw new Error("No characters to remove");
        }
      } catch (error) {
        setInput("Error");
      }
    }
  };

  // Function to handle numeric button clicks
  const handleNumericClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  // Function to handle decimal point button click
  const handleDecimalClick = () => {
    // Check if the input already contains a decimal point
    if (!input.includes(".")) {
      setInput((prevInput) => prevInput + ".");
    }
  };

  // Function to handle operator button clicks
  const handleOperatorClick = (operator) => {
    // Replace ÷ with / before appending it to the input
    if (operator === "÷") {
      operator = "/";
    }
    setInput((prevInput) => prevInput + operator);
  };

  const handleClear = () => {
    setInput("");
  };
  const handleOpenParenthesis = () => {
    setInput((prevInput) => {
      if (!prevInput || /[+\-*/]$/.test(prevInput)) {
        return prevInput + "(";
      } else {
        return prevInput;
      }
    });
  };

  const handleSquareRoot = () => {
    try {
      // Check if the input is not empty
      if (input) {
        // Check if the input is a valid number
        if (!isNaN(parseFloat(input))) {
          // Calculate the square root
          const sqrt = Math.sqrt(parseFloat(input));
          setInput(`Square root of ${input} = ${sqrt}`);
        } else {
          throw new Error("Invalid input for square root calculation");
        }
      } else {
        setInput("Please enter a number first");
      }
    } catch (error) {
      setInput("Error");
    }
  };

  const handleLog = () => {
    try {
      // Check if the input is not empty and is a valid number
      if (input && !isNaN(parseFloat(input))) {
        // Calculate the base 10 logarithm
        const log = Math.log10(parseFloat(input));
        setInput(log.toString());
      } else {
        throw new Error("Invalid input for logarithm calculation");
      }
    } catch (error) {
      setInput("Error");
    }
  };

  const handleCloseParenthesis = () => {
    setInput((prevInput) => {
      if (
        prevInput &&
        !/[+\-*/]$/.test(prevInput) &&
        (prevInput.match(/\(/g) || []).length >
          (prevInput.match(/\)/g) || []).length
      ) {
        return prevInput + ")";
      } else {
        return prevInput;
      }
    });
  };

  const handleReciprocal = () => {
    try {
      // Check if the input is not empty and is a valid number
      if (input && !isNaN(parseFloat(input))) {
        // Calculate the reciprocal
        const reciprocal = 1 / parseFloat(input);
        setInput(reciprocal.toString());
      } else {
        throw new Error("Invalid input for reciprocal calculation");
      }
    } catch (error) {
      setInput("Error");
    }
  };

  const handleFactorial = () => {
    try {
      // Check if the input is not empty and is a valid non-negative integer
      if (
        input &&
        Number.isInteger(parseFloat(input)) &&
        parseFloat(input) >= 0
      ) {
        let factorial = 1;
        for (let i = 2; i <= parseFloat(input); i++) {
          factorial *= i;
        }
        setInput(factorial.toString());
      } else {
        throw new Error("Invalid input for factorial calculation");
      }
    } catch (error) {
      setInput("Error");
    }
  };

  const handleRoot = (y) => {
    try {
      // Check if the input is not empty
      if (input) {
        // Check if the input is a valid number
        if (!isNaN(parseFloat(input))) {
          // Calculate the yth root of x
          const root = Math.pow(parseFloat(input), 1 / parseFloat(y));
          setInput(`${y} root of ${input} = ${root}`);
        } else {
          throw new Error("Invalid input for root calculation");
        }
      } else {
        setInput("Please enter a number first");
      }
    } catch (error) {
      setInput("Error");
    }
  };
  const handlePower = (y) => {
    try {
      if (input) {
        if (!isNaN(parseFloat(input))) {
          const power = Math.pow(parseFloat(input), parseFloat(y));
          setInput(`${input} raised to the power of ${y} = ${power}`);
        } else {
          throw new Error("Invalid input for power calculation");
        }
      } else {
        setInput("Please enter a number first");
      }
    } catch (error) {
      setInput("Error");
    }
  };

  const handleCube = () => {
    try {
      if (input) {
        if (!isNaN(parseFloat(input))) {
          const cube = Math.pow(parseFloat(input), 3);
          setInput(`Cube of ${input} = ${cube}`);
        } else {
          throw new Error("Invalid input for cube calculation");
        }
      } else {
        setInput("Please enter a number first");
      }
    } catch (error) {
      setInput("Error");
    }
  };

  const handleCubeRoot = () => {
    try {
      // Check if the input is not empty
      if (input) {
        // Check if the input is a valid number
        if (!isNaN(parseFloat(input))) {
          // Calculate the cube root
          const cbrt = Math.cbrt(parseFloat(input));
          setInput(`Cube root of ${input} = ${cbrt}`);
        } else {
          throw new Error("Invalid input for cube root calculation");
        }
      } else {
        setInput("Please enter a number first");
      }
    } catch (error) {
      setInput("Error");
    }
  };

  const handleAngleModeChange = (mode) => {
    setAngleMode(mode);
  };

  const evaluateExpression = (expression) => {
    try {
      // Replace trigonometric function names with actual calculations
      expression = expression.replace(/sin\(/g, "Math.sin(");

      // Evaluate the expression
      const result = eval(expression);

      return result;
    } catch (error) {
      return "Error";
    }
  };

  // Function to handle trigonometric function button clicks
  const handleTrigonometricClick = (funcName) => {
    if (input === "Error") {
      // If there's an error, clear the input
      setInput("");
    }

    // Check if the input ends with a number, decimal point, or closing parenthesis
    const lastChar = input.slice(-1);
    if (!isNaN(lastChar) || lastChar === "." || lastChar === ")") {
      // If the last character is a number, decimal point, or closing parenthesis,
      // add a multiplication operator (*) before appending the trigonometric function
      setInput((prevInput) => prevInput + "*" + funcName + "(");
    } else {
      // Otherwise, directly append the trigonometric function
      setInput((prevInput) => prevInput + funcName + "(");
    }
  };
  const calculate = (expression) => {
    try {
      return eval(expression);
    } catch (error) {
      return "Error";
    }
  };
  // Function to handle the equals button click
  const handleEqualsClick = () => {
    // Get the current input expression
    const expression = input;

    // Evaluate the expression
    const result = evaluateExpression(expression);

    // Update the input state with the result
    setInput(result.toString());
  };

  const handleAnsButtonClick = () => {
    try {
      if (ansValue !== null) {
        setInput((prevInput) => prevInput + ansValue.toString());
      } else {
        setInput("No previous result (Ans) available.");
      }
    } catch (error) {
      setInput("Error");
    }
  };

  // And in your equals button handler...
  const handleEqualsButtonClick = () => {
    // Perform the calculation...
    const answer = calculate(input);

    // Store the answer for later use
    lastAnswer = answer;

    // Display the answer
    setInput(answer.toString());
  };

  const handleSquare = () => {
    try {
      if (input) {
        if (!isNaN(parseFloat(input))) {
          const square = Math.pow(parseFloat(input), 2);
          setInput(`Square of ${input} = ${square}`);
        } else {
          throw new Error("Invalid input for square calculation");
        }
      } else {
        setInput("Please enter a number first");
      }
    } catch (error) {
      setInput("Error");
    }
  };

  const handleExponential = () => {
    try {
      if (input) {
        if (!isNaN(parseFloat(input))) {
          const exponential = Math.exp(parseFloat(input));
          setInput(`e raised to the power of ${input} = ${exponential}`);
        } else {
          throw new Error("Invalid input for exponential calculation");
        }
      } else {
        setInput("Please enter a number first");
      }
    } catch (error) {
      setInput("Error");
    }
  };
  const handleTenPower = () => {
    try {
      if (input) {
        if (!isNaN(parseFloat(input))) {
          const tenPower = Math.pow(10, parseFloat(input));
          setInput(`10 raised to the power of ${input} = ${tenPower}`);
        } else {
          throw new Error("Invalid input for power calculation");
        }
      } else {
        setInput("Please enter a number first");
      }
    } catch (error) {
      setInput("Error");
    }
  };

  const handleE = () => {
    try {
      setInput((prevInput) => {
        // Check if the input is empty or ends with an operator
        if (!prevInput || /[+\-*/]$/.test(prevInput)) {
          return prevInput + Math.E.toString();
        } else {
          // If the input ends with a number, append "* e"
          return prevInput + " * " + Math.E.toString();
        }
      });
    } catch (error) {
      setInput("Error");
    }
  };

  const handlePi = () => {
    try {
      // Get the current displayed value (or 0 if nothing is displayed)
      const currentValue = input || "0";

      // Multiply the current value by π and update the display
      const result = (parseFloat(currentValue) * Math.PI).toFixed(10);
      setInput(result);
    } catch (error) {
      setInput("Error");
    }
  };

  const handleArctan = () => {
    try {
      // Check if the input is not empty
      if (!input) {
        setInput("Please enter a number first");
        return;
      }

      // Parse the input as a float
      const inputValue = parseFloat(input);

      // Check if the input is a valid number
      if (isNaN(inputValue)) {
        throw new Error("Invalid input for arctangent calculation");
      }

      // Calculate the arctangent in radians
      const arctan = Math.atan(inputValue);

      // Convert radians to degrees
      const arctanDegrees = (arctan * 180) / Math.PI;

      setInput(`Arctan(${input}) ≈ ${arctanDegrees.toFixed(2)} degrees`);
    } catch (error) {
      setInput("Error: " + error.message);
    }
  };

  const handleArcsin = () => {
    try {
      // Check if the input is not empty
      if (input) {
        // Check if the input is a valid number between -1 and 1
        if (
          !isNaN(parseFloat(input)) &&
          parseFloat(input) >= -1 &&
          parseFloat(input) <= 1
        ) {
          // Calculate the arcsine in degrees
          const arcsin = Math.asin(parseFloat(input)) * (180 / Math.PI);
          setInput(`sin⁻¹(${input}) = ${arcsin} degrees`);
        } else {
          throw new Error(
            "Invalid input for arcsine calculation. Please enter a number between -1 and 1."
          );
        }
      } else {
        setInput("Please enter a number first");
      }
    } catch (error) {
      setInput("Error");
    }
  };
  const handleArccos = () => {
    try {
      // Check if the input is not empty
      if (!input) {
        setInput("Please enter a number first");
        return;
      }

      // Parse the input as a float
      const inputValue = parseFloat(input);

      // Check if the input is a valid number
      if (isNaN(inputValue) || inputValue < -1 || inputValue > 1) {
        throw new Error(
          "Invalid input for arccosine calculation. Please enter a number between -1 and 1."
        );
      }

      // Calculate the arccosine in radians
      const arccos = Math.acos(inputValue);

      // Convert radians to degrees
      const arccosDegrees = (arccos * 180) / Math.PI;

      setInput(`cos⁻¹(${input}) ≈ ${arccosDegrees.toFixed(2)} degrees`);
    } catch (error) {
      setInput("Error: " + error.message);
    }
  };

  const handleSin = () => {
    try {
      if (input) {
        const sinValue = Math.sin(getAngleValue(input));
        setInput(`sin(${input}) = ${sinValue}`);
      } else {
        setInput("Please enter a number first");
      }
    } catch (error) {
      setInput("Error");
    }
  };

  const handleCos = () => {
    try {
      if (input) {
        const cosValue = Math.cos(getAngleValue(input));
        setInput(`cos(${input}) = ${cosValue}`);
      } else {
        setInput("Please enter a number first");
      }
    } catch (error) {
      setInput("Error");
    }
  };

  const handleTan = () => {
    try {
      if (input) {
        const tanValue = Math.tan(getAngleValue(input));
        setInput(`tan(${input}) = ${tanValue}`);
      } else {
        setInput("Please enter a number first");
      }
    } catch (error) {
      setInput("Error");
    }
  };

  const getAngleValue = (inputValue) => {
    if (angleMode === "deg") {
      // Convert degrees to radians for trigonometric functions
      return (parseFloat(inputValue) * Math.PI) / 180;
    } else {
      return parseFloat(inputValue);
    }
  };

  const handleCalculate = () => {
    try {
      const result = eval(input);
      setInput(result.toString());
      ansValue = result; // Update ansValue after a successful calculation
    } catch (error) {
      setInput("Error");
    }
  };

  return (
    <div className="calculator">
      <div className="calculator-screen">
        <input type="text" value={input} readOnly />
      </div>
      <div className="calculator-grid">
        {/* Row 1 */}
        <button className="calculator-button" onClick={() => handleSin("sin")}>
          sin
        </button>
        <button className="calculator-button" onClick={() => handleCos("cos")}>
          cos
        </button>
        <button className="calculator-button" onClick={() => handleTan("tan")}>
          tan
        </button>

        <label>
          <input
            type="radio"
            value="deg"
            checked={angleMode === "deg"}
            onChange={() => handleAngleModeChange("deg")}
          />
          Deg
        </label>
        <label>
          <input
            type="radio"
            value="rad"
            checked={angleMode === "rad"}
            onChange={() => handleAngleModeChange("rad")}
          />
          Rad
        </label>

        {/* Row 2 */}
        <button
          className="calculator-button"
          onClick={() => handleArcsin("sin⁻¹")}
          //onClick={handleArcsin}
        >
          sin⁻¹
        </button>
        <button
          className="calculator-button"
          onClick={() => handleArccos("cos⁻¹")}
        >
          cos⁻¹
        </button>
        <button
          className="calculator-button"
          onClick={() => handleArctan("tan⁻¹")}
        >
          tan⁻¹
        </button>
        <button className="calculator-button" onClick={() => handlePi("π")}>
          π
        </button>

        <button className="calculator-button" onClick={() => handleE("e")}>
          e
        </button>

        {/* Row 3 */}
        <button onClick={() => handlePower("x^y")}>x^y</button>
        <button onClick={() => handleCube("x³")}>x³</button>
        <button onClick={() => handleSquare("x²")}>x²</button>
        <button onClick={() => handleExponential("e^x")}>e^x</button>
        <button onClick={() => handleTenPower("10^x")}>10^x</button>

        {/* More rows and buttons */}

        <button onClick={() => handleRoot(y)}>y√x</button>
        <button onClick={() => handleCubeRoot("3√x")}>3√x</button>
        <button onClick={() => handleSquareRoot("√x")}>√x</button>
        <button onClick={() => handleButtonClick("ln")}>ln</button>
        <button onClick={() => handleLog("log")}>log</button>
        <button onClick={handleOpenParenthesis}>(</button>

        <button onClick={handleCloseParenthesis}>)</button>
        <button onClick={() => handleReciprocal("1/x")}>1/x</button>
        <button onClick={() => handleButtonClick("%")}>%</button>
        <button onClick={() => handleFactorial("n!")}>n!</button>

        <button onClick={() => handleNumericClick("7")}>7</button>
        <button onClick={() => handleNumericClick("8")}>8</button>
        <button onClick={() => handleNumericClick("9")}>9</button>
        <button onClick={() => handleOperatorClick("+")}>+</button>
        <button onClick={() => handleBackButtonClick("Back")}>Back</button>
        <button onClick={() => handleNumericClick("4")}>4</button>
        <button onClick={() => handleNumericClick("5")}>5</button>
        <button onClick={() => handleNumericClick("6")}>6</button>
        <button onClick={() => handleOperatorClick("-")}>-</button>
        <button onClick={() => handleAnsButtonClick("Ans")}>Ans</button>
        <button onClick={() => handleNumericClick("1")}>1</button>
        <button onClick={() => handleNumericClick("2")}>2</button>
        <button onClick={() => handleNumericClick("3")}>3</button>
        <button onClick={() => handleOperatorClick("*")}>×</button>
        <button onClick={() => handleButtonClick("M+")}>M+</button>
        <button onClick={() => handleNumericClick("0")}>0</button>
        <button onClick={() => handleDecimalClick(".")}>.</button>
        <button onClick={() => handleButtonClick("EXP")}>EXP</button>
        <button onClick={() => handleOperatorClick("÷")}>÷</button>
        <button onClick={() => handleButtonClick("M-")}>M-</button>
        <button onClick={() => handleButtonClick("±")}>±</button>
        <button onClick={() => handleButtonClick("RND")}>RND</button>

        <button onClick={handleClear} className="clear-button">
          AC
        </button>
        <button onClick={handleEqualsButtonClick} className="equals-button">
          =
        </button>
        <button onClick={() => handleButtonClick("mr")}>MR</button>
      </div>
    </div>
  );
};

export default Calculator;
