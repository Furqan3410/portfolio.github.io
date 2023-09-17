const expenseNameInput = document.getElementById('expenseName');
const expenseAmountInput = document.getElementById('expenseAmount');
const expenseList = document.getElementById('expenseList');
const totalAmount = document.getElementById('totalAmount');

let expenses = [];

function addExpense() {
  const expenseName = expenseNameInput.value.trim();
  const expenseAmount = parseFloat(expenseAmountInput.value);

  if (expenseName === '' || isNaN(expenseAmount) || expenseAmount <= 0) {
    alert('Please enter a valid expense name and amount.');
    return;
  }

  const expense = {
    name: expenseName,
    amount: expenseAmount
  };

  expenses.push(expense);

  updateExpenseList();
  updateTotalAmount();

  expenseNameInput.value = '';
  expenseAmountInput.value = '';
}

function updateExpenseList() {
  expenseList.innerHTML = '';
  expenses.forEach(expense => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${expense.name}: </span>
      <span>PKR:${expense.amount.toFixed(2)}</span>
      <button onclick="deleteExpense(${expenses.indexOf(expense)})">Delete</button>
    `;
    expenseList.appendChild(li);
  });
}

function deleteExpense(index) {
  expenses.splice(index, 1);
  updateExpenseList();
  updateTotalAmount();
}

function updateTotalAmount() {
  const total = expenses.reduce((acc, curr) => acc + curr.amount, 0);
  totalAmount.textContent = `PKR:${total.toFixed(2)}`;
}
