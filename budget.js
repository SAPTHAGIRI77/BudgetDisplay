let budgetAmountEl = document.getElementById("budgetAmount");
let totalExpensesAmountEl = document.getElementById("totalExpensesAmount");
let balanceAmountEl = document.getElementById("balanceAmount");
let budgetInputErrMsgEl = document.getElementById("budgetInputErrMsg");
let expenseTitleInputErrMsgEl = document.getElementById("expenseTitleInputErrMsg");
let expenseAmountInputErrMsgEl = document.getElementById("expenseAmountInputErrMsg");

let budgetInputEl = document.getElementById("budgetInput");
let expenseTitleInputEl = document.getElementById("expenseTitleInput");
expenseAmountInputEl = document.getElementById("expenseAmountInput");

let setBudgetBtnEl = document.getElementById("setBudgetBtn");
let addExpenseBtnEl = document.getElementById("addExpenseBtn");

let unOrderedListEl = document.getElementById("expensesHistory");

let errorMsgEl = "*Required";

let myFormEl = document.getElementById("myForm");



function updateValue() {

    let value = budgetInputEl.value;

    if (value === "") {
        budgetInputErrMsgEl.textContent = errorMsgEl;
    } else {
        budgetAmountEl.textContent = parseInt(value);
        balanceAmountEl.textContent = parseInt(value)
    }

}

setBudgetBtnEl.addEventListener("click", updateValue)

function deleteTodo(todo_id, titleAmount) {
    let todoEl = document.getElementById(todo_id)
    unOrderedListEl.removeChild(todoEl);
    balanceAmountEl.textContent = parseInt(balanceAmountEl) + parseInt(titleAmount);

}
let todoId = 1;

function getTitleAmount() {
    let titleName = expenseTitleInputEl.value
    let titleAmount = expenseAmountInputEl.value




    let todo_id = todoId + 1
    if ((titleName !== "") && (titleAmount !== "")) {
        let listEl = document.createElement("li")
        listEl.id = todo_id;

        let containerEl = document.createElement("div");
        containerEl.classList.add("last_div", "d-flex", "flex-row")

        let headEl_1 = document.createElement("h1")

        headEl_1.textContent = titleName
        headEl_1.classList.add("expenses_title_js")
        containerEl.appendChild(headEl_1)

        let headEl_2 = document.createElement("h1")
        headEl_2.textContent = titleAmount
        headEl_2.classList.add("expenses_amount_js")
        containerEl.appendChild(headEl_2)

        let image_con = document.createElement("div")
        image_con.onclick = function() {
            deleteTodo(todo_id, titleAmount)
        }
        let iEl = document.createElement("i");
        iEl.classList.add("far", "fa-trash-alt")
        image_con.appendChild(iEl)
        containerEl.appendChild(image_con)

        listEl.appendChild(containerEl)
        unOrderedListEl.appendChild(listEl)

        totalExpensesAmountEl.textContent = parseInt(totalExpensesAmount.textContent) + parseInt(titleAmount)
        balanceAmountEl.textContent = parseInt(balanceAmountEl.textContent) - parseInt(titleAmount)
    }


}




addExpenseBtnEl.addEventListener("click", getTitleAmount)




expenseTitleInputEl.addEventListener("change", function(event) {
    if (expenseTitleInputEl.value === "") {
        expenseTitleInputErrMsgEl.textContent = errorMsgEl;
    } else {
        expenseTitleInputErrMsgEl.textContent = "";
    }
})
expenseAmountInputEl.addEventListener("change", function(event) {
    if (expenseAmountInputEl.value === "") {
        expenseAmountInputErrMsgEl.textContent = errorMsgEl;
    } else {
        expenseAmountInputErrMsgEl.textContent = "";
    }
});



myFormEl.addEventListener("submit", function(event) {
    event.preventDefault();


})