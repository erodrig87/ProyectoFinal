

function setLabels(fecha){
  fFecha= new Date(fecha);
  lablesChart = [];
  for(let i = 0; i <7 ; i++){
      lablesChart.push(fFecha.toLocaleDateString());
      fFecha.setDate(fFecha.getDate() - 1);
  }
  return lablesChart.reverse();
}

function setData(){
  dataChart=[];
  lablesChart.forEach(element => {
      dataChart.push(sumExpenses(filterDate(arrExpenses,element)));
      
  });
  return dataChart;

}
function randomColor() {

    let arrColors =[];
    let uniqueCategories = parseInt(localStorage.getItem("uniqueCategories"));
    for( let i = 0; i<uniqueCategories;i++)arrColors.push("#" + ((1<<10)*Math.random() | 0).toString(16));
    return arrColors;
}

//funcion actualiza graficos

(updateChart = (fechaChart) => {
  'use strict'

  feather.replace({ 'aria-hidden': 'true' })
  
  // Grafico que visualiza gastos por dia en ultima semana
  const ctx = document.getElementById('myChart')
  
  // eslint-disable-next-line no-unused-vars
  const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      //eje x
      labels: setLabels(fechaChart) /*[
        restarDias(6).toLocaleDateString(), //funcion que devuelve fecha actual - x dias pasados com parametro
        restarDias(5).toLocaleDateString(),
        restarDias(4).toLocaleDateString(),
        restarDias(3).toLocaleDateString(),
        restarDias(2).toLocaleDateString(),
        restarDias(1).toLocaleDateString(),
        restarDias(0).toLocaleDateString(),
      ]*/,
      // eje y
      datasets: [{
        // data ejemplo -> futuro se remplazara con sumatoria de gastos por dia 
        data: setData()/*[
          sumExpenses(filterDate(arrExpenses,restarDias(6).toLocaleDateString())),
          sumExpenses(filterDate(arrExpenses,restarDias(5).toLocaleDateString())),
          sumExpenses(filterDate(arrExpenses,restarDias(4).toLocaleDateString())),
          sumExpenses(filterDate(arrExpenses,restarDias(3).toLocaleDateString())),
          sumExpenses(filterDate(arrExpenses,restarDias(2).toLocaleDateString())),
          sumExpenses(filterDate(arrExpenses,restarDias(1).toLocaleDateString())),
          sumExpenses(filterDate(arrExpenses,restarDias(0).toLocaleDateString())),
        ]*/,
        lineTension: 0,
        backgroundColor: '#007bff',
        borderColor: '#007bff',
        borderWidth: 4,
        pointBackgroundColor: '#007bff'
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: false
          },
          scaleLabel: {
            display: true,
            labelString: 'Valor de Gasto'
          }
        }],
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Fecha'
          }
        }]
      },
      
      legend: {
        display: false
      }
    }
  })

  const ctx3 = document.getElementById('myChart3')
  const myChart3 = new Chart(ctx3, {
    type: 'pie',
    data: {
      //eje x
      labels: makeFilterCategory(arrExpenses), //funcion que retorna array de categorias
      // eje y
      datasets: [{
        
        data: sumExpensesByCategory(),//funcion que retorna array de suma x categoria
      //  lineTension: 0,
      backgroundColor: randomColor(),
      }],
      hoverOffset: 4
    },
    options: {
      scales: {
      /*  yAxes: [{
          ticks: {
            beginAtZero: false
          }
        }]*/
      },
      legend: {
        display: false
      }
    }
  })

})()

