import { expenses } from "./mockData.js";

const expenseList = document.getElementById("expense-list");

const storedExpenses = JSON.parse(localStorage.getItem("expenseData"));

const createCell = (text) => {
  const td = document.createElement("td");
  td.textContent = text;
  return td;
};

storedExpenses.forEach((expense) => {
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

  tr.appendChild(titleTd);
  tr.appendChild(amountTd);
  tr.appendChild(dateTd);
  tr.appendChild(categoryTd);
  tr.appendChild(paymentTd);

  expenseList.appendChild(tr);
});
