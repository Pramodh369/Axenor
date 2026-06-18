import {
  calculateBalance,
} from "../utils/fundsUtils";

describe("Funds Calculations", () => {
  test(
    "calculates available balance",
    () => {
      const funds = [
        {
          type: "ADD",
          amount: 10000,
        },
        {
          type: "ADD",
          amount: 5000,
        },
        {
          type: "WITHDRAW",
          amount: 2000,
        },
      ];

      expect(
        calculateBalance(funds)
      ).toBe(13000);
    }
  );
});