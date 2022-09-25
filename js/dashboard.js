
const backwardDashboardDate = () => {

  updateChart(fechaChart.setDate(fechaChart.getDate() - 7));
  
}

const forwardDashboardDate = () => {

  updateChart(fechaChart.setDate(fechaChart.getDate() + 7));
  
}

const thisWeek = () => {

  fechaChart = new Date();
  updateChart(fechaChart); 
}

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

/*

const updateChart = () => {

  myChart.labels = setLabels(fechaChart);
  myChart.data = setData(fechaChart);
  myChart.update();
  myChart2.labels = makeFilterCategory(arrExpenses);
  myChart2.data = sumExpensesByCategory();
  myChart2.data.backgroundColor = randomColor();
 myChart2.update();
 

}


//'use strict'

//feather.replace({ 'aria-hidden': 'true' })

// Grafico que visualiza gastos por dia en ultima semana
const ctx = document.getElementById('myChart')

// eslint-disable-next-line no-unused-vars
const myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    //eje x
    labels: setLabels(fechaChart),
    // eje y
    datasets: [{
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
const myChart2 = new Chart(ctx3, {
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
    },
    legend: {
      display: false
    }
  }
})*/

const updateChart = (fechaChart) => {
  'use strict'

  let barChart = document.getElementById("barChart");
  barChart.innerHTML='';
  let barCanvas = document.createElement("canvas");
  barCanvas.setAttribute("style", "width:400px");
  barCanvas.setAttribute("style", "height:400px");
  barCanvas.setAttribute("class","my-4 w-100");
  barCanvas.setAttribute("id","barChartElements");
  barChart.appendChild(barCanvas);
  let barTitle = document.createElement("p");
  barTitle .setAttribute("class", "text-center");
  barTitle.innerHTML="Total x Categoría";
  barChart.appendChild(barTitle);
  barChart.appendChild(barCanvas);
   

  //feather.replace({ 'aria-hidden': 'true' })

  
  const ctxBar = document.getElementById('barChartElements');

  // eslint-disable-next-line no-unused-vars
  const myChart = new Chart(ctxBar, {
    type: 'bar',
    data: {
      //eje x
      labels: setLabels(fechaChart),
      // eje y
      datasets: [{
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

  let pieChart = document.getElementById("pieChart");
  pieChart.innerHTML='';
  let pieCanvas = document.createElement("canvas");
  pieCanvas.setAttribute("style", "width:200px");
  pieCanvas.setAttribute("style", "height:100px");
  pieCanvas.setAttribute("class","my-4 w-100");
  pieCanvas.setAttribute("id","pieChartElements");
  let pieTitle = document.createElement("p");
  pieTitle .setAttribute("class", "text-center");
  pieTitle.innerHTML="Total x Categoría";
  pieChart.appendChild(pieTitle);
  pieChart.appendChild(pieCanvas);


  const ctxPie = document.getElementById("pieChartElements")
  const myPieChart = new Chart(ctxPie, {
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
      },
      legend: {
        display: false
      }
    }
  })

}

