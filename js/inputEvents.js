//Declaracion de Eventos
let btnInputExpenseForm = document.getElementById("btnInputExpenseForm");
btnInputExpenseForm.onclick = () => { readFormInput();};

let btnReset = document.getElementById("btnReset");
btnReset.onclick = () => { resetExpense(); };

let btnbackwardDashboardDate = document.getElementById("btnbackwardDashboardDate");
btnbackwardDashboardDate.onclick = () => { backwardDashboardDate(); };

let btnThisWeek = document.getElementById("btnThisWeek");
btnThisWeek.onclick = () => { thisWeek(); };

let btnForwardDashboardDate= document.getElementById("btnForwardDashboardDate");
btnForwardDashboardDate.onclick = () => { forwardDashboardDate(); };

