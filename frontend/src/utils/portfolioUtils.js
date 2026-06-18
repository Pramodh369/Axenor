export const calculateProfit = (
  qty,
  avgPrice,
  currentPrice
) => {
  return (
    (currentPrice - avgPrice) * qty
  );
};

export const calculatePortfolioValue = (
  qty,
  currentPrice
) => {
  return qty * currentPrice;
};