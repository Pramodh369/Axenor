export const calculateBalance = (
  funds
) => {
  return funds.reduce(
    (total, item) =>
      item.type === "ADD"
        ? total + item.amount
        : total - item.amount,
    0
  );
};