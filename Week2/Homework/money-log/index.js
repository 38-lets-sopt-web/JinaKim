import { expenses } from "./mockData.js";

//헤더 아이콘 클릭 시 새로고침
const headerIcon = document.querySelector("#header-icon");
headerIcon.addEventListener("click", () => window.location.reload());

/** 셀 만들기 함수 */
const createCell = (text) => {
  const td = document.createElement("td");
  td.textContent = text;
  return td;
};

//표 만들기
const isIncome = (expense) => expense.amount > 0;
const isExpense = (expense) => expense.amount < 0;

const expenseList = document.querySelector("#expense-list");

/** 표 렌더링 함수 */
const renderExpenses = (expenseArray) => {
  expenseList.innerHTML = "";

  expenseArray.forEach((expense) => {
    const tr = document.createElement("tr");

    const checkTd = document.createElement("td");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    checkTd.appendChild(checkbox);
    tr.appendChild(checkTd);
    tr.dataset.id = expense.id;

    const titleTd = createCell(expense.title);
    const amountTd = createCell(expense.amount);
    const dateTd = createCell(expense.date);
    const categoryTd = createCell(expense.category);
    const paymentTd = createCell(expense.payment);

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
};

// localStorage의 데이터를 테이블에 렌더링
let storedExpenses = JSON.parse(localStorage.getItem("expenseData")) || [];

renderExpenses(storedExpenses);

// 검색 필터링
const titleInput = document.querySelector("#title");
const typeInput = document.querySelector("#type");
const categoryInput = document.querySelector("#category");
const paymentInput = document.querySelector("#payment");

const applyButton = document.querySelector("#filter-apply-button");
const resetButton = document.querySelector("#filter-reset-button");

/** 필터링 적용 버튼 (AND 필터링 가능) */
const applyFiltering = () => {
  const keyword = titleInput.value.trim();
  const type = typeInput.value;
  const category = categoryInput.value;
  const payment = paymentInput.value;

  const filteringExpenses = storedExpenses.filter((expense) => {
    const isMatchedKeyword = keyword === "" || expense.title.includes(keyword);

    const isMatchedType =
      type === "" ||
      (type === "수입" && isIncome(expense)) ||
      (type === "지출" && isExpense(expense));

    const isMatchedCategory = category === "" || expense.category === category;

    const isMatchedPayment = payment === "" || expense.payment === payment;

    return (
      isMatchedKeyword && isMatchedType && isMatchedCategory && isMatchedPayment
    );
  });

  renderExpenses(filteringExpenses);
};

/** 초기화 버튼 */
const resetFiltering = () => {
  titleInput.value = "";
  typeInput.value = "";
  categoryInput.value = "";
  paymentInput.value = "";

  renderExpenses(storedExpenses);
};

applyButton.addEventListener("click", applyFiltering);
resetButton.addEventListener("click", resetFiltering);

//삭제 기능
const deleteButton = document.querySelector("#delete-button");

/** 선택 삭제 함수 */
const deletingExpenses = () => {
  const checkedList = document.querySelectorAll(
    'input[type="checkbox"]:checked',
  );

  const checkedIdList = Array.from(checkedList).map((checkbox) =>
    Number(checkbox.closest("tr").dataset.id),
  );

  storedExpenses = storedExpenses.filter(
    (expense) => !checkedIdList.includes(expense.id),
  );

  localStorage.setItem("expenseData", JSON.stringify(storedExpenses));
  renderExpenses(storedExpenses);
};

deleteButton.addEventListener("click", deletingExpenses);

//내역 추가 모달 구현
const addBtn = document.querySelector("#add-button");
const addModal = document.querySelector("#add-modal");
const closeModalBtn = document.querySelector("#close-modal-button");
const modalAddBtn = document.querySelector("#modal-add-button");

const openModal = () => addModal.classList.remove("hidden");
const closeModal = () => addModal.classList.add("hidden");

addBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);

const addTitleInput = document.querySelector("#add-title-input");
const addTypeInput = document.querySelector("#add-type-input");
const addAmountInput = document.querySelector("#add-amount-input");
const addDateInput = document.querySelector("#add-date-input");
const addCategoryInput = document.querySelector("#add-category-input");
const addPaymentInput = document.querySelector("#add-payment-input");

/** 내역 추가 함수 */
const addExpense = () => {
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

  storedExpenses.push(newExpense);
  localStorage.setItem("expenseData", JSON.stringify(storedExpenses));
  renderExpenses(storedExpenses);
  closeModal();
};

modalAddBtn.addEventListener("click", addExpense);
