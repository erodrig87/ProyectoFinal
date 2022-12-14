
const getDolarValues = async () => {
    const resp = await fetch('https://api.bluelytics.com.ar/v2/latest');
    if (!resp.ok) {
        nodoform = document.getElementById("sidebarMenu");
        nodo = document.createElement("div");
        
        nodo.id = "min";
        nodo.classList = "alert alert-info"; nodo.style.visibility = "visible";
        nodo.innerHTML = `ERROR DE API - SIN VALOR DOLAR BLUE`;
        nodoform.appendChild(nodo);
	    throw new Error(`HTTP error! status: ${resp.status}`);
	    }
    
        const data = await resp.json();
    

        console.log(data);
        console.log(data.blue.value_buy);
        localStorage.setItem("dolar_blue_buy_value", JSON.stringify(data.blue.value_buy));
    
    
        nodoform = document.getElementById("sidebarMenu");
        nodo = document.createElement("div");
        
        nodo.id = "min";
        nodo.classList = "alert alert-info"; nodo.style.visibility = "visible";
        nodo.innerHTML = `DOLAR BLUE: Valor compra= ${data.blue.value_buy} || Valor venta = ${data.blue.value_sell}`;
        nodoform.appendChild(nodo);

    }

const getExpensesData = () => {
    //const resp = await
    fetch('../data.json')
    .then((resp)=> resp.json()
    .then ((data) => {
        arrExpensesServerStored = data;
        console.log(arrExpensesServerStored);
        updateArrayExpenseTable(arrExpensesServerStored);
        arrExpensesStored.length>0 && updateArrayExpenseTable(arrExpensesStored); // actualiza con gastos almacenados localmente
        updateChart(fechaChart);
        showMaxMin();
    })    
    )
    .catch(error => {
        console.log(`error ${error}`);
        arrExpensesStored.length>0 && updateArrayExpenseTable(arrExpensesStored); // actualiza con gastos almacenados localmente
        updateChart(fechaChart);
        showMaxMin();
    }) 
}


