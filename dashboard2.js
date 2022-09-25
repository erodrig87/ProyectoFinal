//funcion que devuelve fecha actual - x dias pasados como parametro utilizada en dashboard.js para modificar eje x del grafico
function restarDias(dias) {
    fecha = new Date();
    fecha.setDate(fecha.getDate() - dias);
    return fecha;
  }
  
  function randomColor() {
  
      let arrColors =[];
      let uniqueCategories = parseInt(localStorage.getItem("uniqueCategories"));
      for( let i = 0; i<uniqueCategories;i++)arrColors.push("#" + ((1<<10)*Math.random() | 0).toString(16));
      return arrColors;
  }

  let lablesChart =[];
(updateChart = () => {
    'use strict'
  
    feather.replace({ 'aria-hidden': 'true' })
    
    // Grafico que visualiza gastos por dia en ultima semana
    const ctx = document.getElementById('myChart')
    
    // eslint-disable-next-line no-unused-vars
    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        //eje x
        labels: setLabels("9/24/2022"),
        // eje y
        datasets: [{
          // data ejemplo -> futuro se remplazara con sumatoria de gastos por dia 
          data: setData(),
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
