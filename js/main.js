
//Def variables globales

//let createRandomExpenses = true;//localStorage.getItem("RANDOM_EXPENSES") || "true";

let gasto_total = 0;
let avgExpense = parseFloat(JSON.parse(localStorage.getItem("AVERAGE_EXPENSES")) || 0);
let maxExpense = parseFloat(JSON.parse(localStorage.getItem("MAX_EXPENSE")) || 0);
let gasto_min = parseFloat(JSON.parse(localStorage.getItem("MIN_EXPENSE")) || 0);
let ID_GASTO_GLOBAL = JSON.parse(localStorage.getItem("ID_GASTO_GLOBAL")) || 0;
let arrExpensesStored = JSON.parse(localStorage.getItem("arrExpensesStored")) || [];
let arrExpensesServerStored =[];
let arrExpenses = [];
let selectedFecha;
let selectedValue;
lablesChart = [];
dataChart = [];
fechaChart = new Date();

getExpensesData(); // Se cargan gastos de data.json utilizando funcion fetch

arrExpensesStored.length>0 && updateArrayExpenseTable(arrExpensesStored); // actuliza con gastos almacenados localmente

//(createRandomExpenses == "true") ? randomExpenses():false; // si no hay gastos ingresados, genera 9 aleatorios.

getDolarValues();

  
  






