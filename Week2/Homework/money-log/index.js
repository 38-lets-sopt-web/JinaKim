import { expenses } from "./mockData.js";

/** 셀 만들기 함수 */
const createCell = (text) => {
  const td = document.createElement("td");
  td.textContent = text;
  return td;
};

const isIncome = (expense) => expense.amount > 0;
const isExpense = (expense) => expense.amount < 0;

/** 표 렌더링 함수 */
const expenseList = document.querySelector("#expense-list");

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

/** 필터링 적용 버튼 (개별로만 가능) */
const applyFiltering = () => {
  const keyword = titleInput.value.trim();
  const type = typeInput.value;
  const category = categoryInput.value;
  const payment = paymentInput.value;

  let filteringExpenses = storedExpenses;

  if (keyword !== "") {
    filteringExpenses = storedExpenses.filter((expense) =>
      expense.title.includes(keyword),
    );
  } else if (type !== "") {
    filteringExpenses =
      type === "수입"
        ? storedExpenses.filter(isIncome)
        : storedExpenses.filter(isExpense);
  } else if (category !== "") {
    filteringExpenses = storedExpenses.filter(
      (expense) => expense.category === category,
    );
  } else if (payment !== "") {
    filteringExpenses = storedExpenses.filter(
      (expense) => expense.payment === payment,
    );
  }

  console.log(filteringExpenses);

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
