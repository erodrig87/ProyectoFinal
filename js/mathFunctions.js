//Devuelve la posicion del gasto maximo
const maxGasto = () => {
    const valores = arrExpenses.map((object) => object.valor);
    let max = Math.max(...valores);
    localStorage.setItem("MAX_EXPENSE", JSON.stringify(max));
    return max;
}

//Devuelve la posicion del gasto minimo
const minGasto = () => {
    const valores = arrExpenses.map((object) => object.valor);
    let min = Math.min(...valores);
    localStorage.setItem("MIN_EXPENSE", JSON.stringify(min));
    return min;
}
//Devuelve el avgExpense de gastos ingresados
const avgExpenses = () => {
    let suma_valores = 0;
    let prom = 0;
    arrExpenses.forEach(function(gasto) { suma_valores += gasto.valor });
    prom = (suma_valores/arrExpenses.length);
    localStorage.setItem("AVERAGE_EXPENSES", JSON.stringify(prom));
    return prom;
}

//Devuelve la suma total del array
const sumExpenses = (_array) => {
    
    let total_sum = 0;
    
    _array.forEach(function(gasto) { total_sum += gasto.valor });
    localStorage.setItem("total_sum", JSON.stringify(total_sum));
    return total_sum;
}



//devuelve array de sumas x categoria
function sumExpensesByCategory(){

    let arrSumExpensesByCategory =[];
    let arrayCategorias = makeFilterCategory(arrExpenses);
    for(let i=0;i<arrayCategorias.length;i++){
 
       arrSumExpensesByCategory.push(sumExpenses(filterCategory(arrExpenses,arrayCategorias[i])));

    }
    return arrSumExpensesByCategory;
}