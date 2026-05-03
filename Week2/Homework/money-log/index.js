import { filterExpenses, isExpense, isIncome } from "./filter.js";
import "./mockData.js";
import { closeModal, initModalEvents, openModal } from "./modal.js";
import { createExpense, deleteExpensesByIds, getExpenses } from "./storage.js";

// DOM 요소
const headerIcon = document.querySelector("#header-icon");

const totalAmount = document.querySelector("#total-amount");
const expenseList = document.querySelector("#expense-list");

const titleInput = document.querySelector("#title");
const typeInput = document.querySelector("#type");
const categoryInput = document.querySelector("#category");
const paymentInput = document.querySelector("#payment");

const applyButton = document.querySelector("#filter-apply-button");
const resetButton = document.querySelector("#filter-reset-button");
const sortSelector = document.querySelector("#sort");

const deleteButton = document.querySelector("#delete-button");
const selectAllCheckbox = document.querySelector("#select-all-checkbox");

const addTitleInput = document.querySelector("#add-title-input");
const addTypeInput = document.querySelector("#add-type-input");
const addAmountInput = document.querySelector("#add-amount-input");
const addDateInput = document.querySelector("#add-date-input");
const addCategoryInput = document.querySelector("#add-category-input");
const addPaymentInput = document.querySelector("#add-payment-input");
const addExpenseForm = document.querySelector("#add-expense-form");

const detailTitle = document.querySelector("#detail-title");
const detailAmount = document.querySelector("#detail-amount");
const detailDate = document.querySelector("#detail-date");
const detailCategory = document.querySelector("#detail-category");
const detailPayment = document.querySelector("#detail-payment");

// 헤더 아이콘 클릭 시 새로고침
headerIcon.addEventListener("click", () => window.location.reload());

/** 셀 만들기 함수 */
const createCell = (text) => {
  const td = document.createElement("td");
  td.textContent = text;
  return td;
};

/** 날짜 내림차순 정렬 함수 */
const sortByDateDesc = (expenses) => {
  return [...expenses].sort((a, b) => new Date(b.date) - new Date(a.date));
};

/** 날짜 오름차순 정렬 함수 */
const sortByDateAsc = (expenses) => {
  return [...expenses].sort((a, b) => new Date(a.date) - new Date(b.date));
};

/** 현재 정렬 방식에 맞게 정렬하는 함수 */
const sortExpenses = (expenseArray) => {
  if (currentSortType === "desc") {
    return sortByDateDesc(expenseArray);
  }

  return sortByDateAsc(expenseArray);
};

/** total 값 계산 함수 */
const calTotalAmount = (expenses) => {
  return expenses.reduce((total, expense) => {
    return total + Number(expense.amount);
  }, 0);
};

/** total 값 렌더링 함수 */
const renderTotalAmount = (expenses) => {
  totalAmount.textContent = `${calTotalAmount(expenses).toLocaleString()}원`;
};

/** 표 렌더링 함수 */
const renderExpenses = (expenseArray) => {
  expenseList.innerHTML = "";

  expenseArray.forEach((expense) => {
    const tr = document.createElement("tr");

    const checkTd = document.createElement("td");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("expense-checkbox");

    checkTd.appendChild(checkbox);
    tr.appendChild(checkTd);

    tr.dataset.id = expense.id;

    const titleTd = createCell(expense.title);
    const amountTd = createCell(expense.amount.toLocaleString());
    const dateTd = createCell(expense.date);
    const categoryTd = createCell(expense.category);
    const paymentTd = createCell(expense.payment);

    titleTd.classList.add("expense-title");

    if (isIncome(expense)) {
      amountTd.classList.add("income");
    } else if (isExpense(expense)) {
      amountTd.classList.add("expense");
    }

    tr.appendChild(titleTd);
    tr.appendChild(amountTd);
    tr.appendChild(dateTd);
    tr.appendChild(categoryTd);
    tr.appendChild(paymentTd);

    expenseList.appendChild(tr);
  });

  renderTotalAmount(expenseArray);
};

let storedExpenses = getExpenses();
let currentSortType = "desc";

renderExpenses(sortExpenses(storedExpenses));

/** 현재 필터 입력값을 가져오는 함수 */
const getFilterValues = () => {
  return {
    keyword: titleInput.value.trim(),
    type: typeInput.value,
    category: categoryInput.value,
    payment: paymentInput.value,
  };
};

/** 필터와 정렬을 모두 적용하여 렌더링하는 함수 */
const renderFilteredAndSortedExpenses = () => {
  const filters = getFilterValues();
  const filteredExpenses = filterExpenses(storedExpenses, filters);
  const sortedExpenses = sortExpenses(filteredExpenses);

  renderExpenses(sortedExpenses);
};

/** 필터링 적용 버튼 */
const applyFiltering = () => {
  renderFilteredAndSortedExpenses();
};

/** 초기화 버튼 */
const resetFiltering = () => {
  titleInput.value = "";
  typeInput.value = "";
  categoryInput.value = "";
  paymentInput.value = "";

  renderFilteredAndSortedExpenses();
};

applyButton.addEventListener("click", applyFiltering);
resetButton.addEventListener("click", resetFiltering);

sortSelector.addEventListener("change", () => {
  currentSortType = sortSelector.value;
  renderFilteredAndSortedExpenses();
});

/** 전체 체크박스 토글 */
const toggleAllCheckbox = () => {
  const expenseCheckboxes = document.querySelectorAll(".expense-checkbox");

  expenseCheckboxes.forEach((checkbox) => {
    checkbox.checked = selectAllCheckbox.checked;
  });
};

/** 개별 체크박스 기준으로 업데이트하는 함수 */
const updateSelectAllCheckbox = () => {
  const expenseCheckboxes = document.querySelectorAll(".expense-checkbox");

  const isAllChecked =
    expenseCheckboxes.length > 0 &&
    Array.from(expenseCheckboxes).every((checkbox) => checkbox.checked);

  selectAllCheckbox.checked = isAllChecked;
};

expenseList.addEventListener("change", (event) => {
  if (!event.target.classList.contains("expense-checkbox")) {
    return;
  }

  updateSelectAllCheckbox();
});

selectAllCheckbox.addEventListener("change", toggleAllCheckbox);

/** 선택 삭제 함수 */
const deleteExpenses = () => {
  const checkedList = document.querySelectorAll(".expense-checkbox:checked");

  const checkedIdList = Array.from(checkedList).map((checkbox) =>
    Number(checkbox.closest("tr").dataset.id),
  );

  deleteExpensesByIds(checkedIdList);
  storedExpenses = getExpenses();

  renderFilteredAndSortedExpenses();
  selectAllCheckbox.checked = false;
};

deleteButton.addEventListener("click", deleteExpenses);

initModalEvents();

/** 내역 추가 함수 */
const addExpense = (event) => {
  event.preventDefault();

  if (
    !addTitleInput.value ||
    !addTypeInput.value ||
    !addAmountInput.value ||
    !addDateInput.value ||
    !addCategoryInput.value ||
    !addPaymentInput.value
  ) {
    alert("내용을 모두 입력해주세요");
    return;
  }

  const signedAmount =
    addTypeInput.value === "수입"
      ? Number(addAmountInput.value)
      : -Number(addAmountInput.value);

  const newExpense = {
    id: Date.now(),
    title: addTitleInput.value,
    type: addTypeInput.value,
    amount: signedAmount,
    date: addDateInput.value,
    category: addCategoryInput.value,
    payment: addPaymentInput.value,
  };

  createExpense(newExpense);
  storedExpenses = getExpenses();

  renderFilteredAndSortedExpenses();
  closeModal("add-modal");

  addExpenseForm.reset();
};

addExpenseForm.addEventListener("submit", addExpense);

/** 세부 모달 열기 */
const openDetailModal = (expense) => {
  detailTitle.textContent = expense.title;
  detailAmount.textContent = `${expense.amount.toLocaleString()}원`;
  detailDate.textContent = expense.date;
  detailCategory.textContent = expense.category;
  detailPayment.textContent = expense.payment;

  openModal("detail-modal");
};

/** 제목 셀 클릭 시 세부 모달을 여는 함수 */
const handleExpenseTitleClick = (event) => {
  const titleCell = event.target.closest(".expense-title");

  if (!titleCell) {
    return;
  }

  const row = titleCell.closest("tr");
  const expenseId = Number(row.dataset.id);

  const selectedExpense = storedExpenses.find((expense) => {
    return expense.id === expenseId;
  });

  if (!selectedExpense) {
    return;
  }

  openDetailModal(selectedExpense);
};

expenseList.addEventListener("click", handleExpenseTitleClick);
