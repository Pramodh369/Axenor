import {
  calculateProfit,
  calculatePortfolioValue,
} from "../utils/portfolioUtils";

describe(
  "Portfolio Calculations",
  () => {
    test(
      "calculates profit correctly",
      () => {
        expect(
          calculateProfit(
            10,
            100,
            120
          )
        ).toBe(200);
      }
    );

    test(
      "calculates portfolio value",
      () => {
        expect(
          calculatePortfolioValue(
            15,
            500
          )
        ).toBe(7500);
      }
    );
  }
);