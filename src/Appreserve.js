import BigFractionCalculator from "./bignumberfraction";
import BinaryCalculator from "./binary/binary";
import DecimalToFractionCalculator from "./decimaltofraction";
import ExponentCalculator from "./exponent/exponent";
import FactorCalculator from "./factor/factor";
import FractionCalculator from "./fractions";
import FractionCalculatorsteps from "./fractionswithsteps";
import GCDCalculator from "./gcd/gcd";
import {
  HalfLifeCalculator,
  HalfLifeConversionCalculator
} from "./halflife/halflife";
import HexCalculator from "./hex/hex";
import LCMCalculator from "./lcm/lcm";
import LogCalculator from "./logarithm/logarithm";
//import MatrixCalculator from "./matrix/matrix";
import MixedNumberCalculator from "./mixednumbers";
import Percentage from "./percentage/percentage";
import PercentageChangeCalculator from "./percentage/percentagechange";
import PercentageDifferenceCalculator from "./percentage/percentagedifference";
import PercentErrorCalculator from "./percentage/percentageerror";
import Phrasepercentage from "./percentage/phrasepercentage";
import QuadraticFormulaCalculator from "./quadratic/quadratic";
import ComprehensiveRandomGenerator from "./randomnumber/comprehensiverandomnumber";
import RandomNumberGenerator from "./randomnumber/randomnumber";
import RatioCalculator from "./ratio/ratio";
import RootCalculator from "./root/root";
import RoundingCalculator from "./rounding/rounding";
import Calculator from "./scientificcalculator";
import SimplifyFractionsCalculator from "./simplifyfraction";
import "./styles.css";

export default function AppR() {
  return (
    <div className="App">
      <div className="calculator-container">
        <div className="">
          <h2 className="calculator-title">Percentage Calculator</h2>
          <RoundingCalculator />
        </div>
        <div className="">
          <h2 className="calculator-title">Phrase Percentage Calculator</h2>
          <FactorCalculator />
        </div>

        <div className="">
          <h2 className="calculator-title">Percentage Change Calculator</h2>
          <PercentageChangeCalculator />
        </div>
      </div>
    </div>
  );
}
