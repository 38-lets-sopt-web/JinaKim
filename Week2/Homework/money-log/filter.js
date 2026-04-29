export const isIncome = (expense) => expense.amount > 0;
export const isExpense = (expense) => expense.amount < 0;

/** 필터 조건 확인 함수 */
export const isMatchedFilter = (expense, filters) => {
  const isMatchedKeyword =
    filters.keyword === "" || expense.title.includes(filters.keyword);

  const isMatchedType =
    filters.type === "" ||
    (filters.type === "수입" && isIncome(expense)) ||
    (filters.type === "지출" && isExpense(expense));

  const isMatchedCategory =
    filters.category === "" || expense.category === filters.category;

  const isMatchedPayment =
    filters.payment === "" || expense.payment === filters.payment;

  return (
    isMatchedKeyword && isMatchedType && isMatchedCategory && isMatchedPayment
  );
};

/** 필터링 된 배열을 반환하는 함수 */
export const filterExpenses = (expenseArray, filters) => {
  return expenseArray.filter((expense) => isMatchedFilter(expense, filters));
};
