const STORAGE_KEY = {
  EXPENSE_DATA: "expenseData",
};

/** 내역 조회 함수 */
export const getExpenses = () => {
  return JSON.parse(localStorage.getItem(STORAGE_KEY.EXPENSE_DATA)) || [];
};

/** 내역 저장 함수 */
export const saveExpenses = (expenses) => {
  localStorage.setItem(STORAGE_KEY.EXPENSE_DATA, JSON.stringify(expenses));
};

/** 로컬스토리지 내역 삭제 */
export const deleteExpensesByIds = (ids) => {
  const expenses = getExpenses().filter((expense) => !ids.includes(expense.id));

  saveExpenses(expenses);
};

/** 로컬스토리지 내역 추가 */
export const createExpense = (newExpense) => {
  const expenses = getExpenses();
  expenses.push(newExpense);
  saveExpenses(expenses);
};
