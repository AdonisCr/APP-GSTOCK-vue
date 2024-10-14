<script setup>
import { onMounted, ref } from 'vue';
import { Chart, registerables } from 'chart.js';

// Enregistrer tous les composants
Chart.register(...registerables);

const chartVentesCanvas = ref(null);
const chartAchatsCanvas = ref(null);

// Données pour les ventes
const chartDataVentes = {
  labels: ['Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Jui', 'Jul', 'Aou', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [{
    label: 'Historique des ventes',
    data: [210000, 180000, 160000, 110000, 95000, 70000, 4800, 25000 , 95000, 120000, 95000, 95000],
    backgroundColor: 'rgba(75, 102, 192, 0.8)',
    borderColor: 'rgba(75, 102, 192, 1)',
    borderWidth: 1
  }]
};

// Données pour les achats
const chartDataAchats = {
  labels: ['Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Jui', 'Jul', 'Aou', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [{
    label: 'Historique des achats',
    data: [210000, 180000, 160000, 110000, 95000, 70000, 4800, 25000 , 95000, 12000, 95000, 95000],
    backgroundColor: 'rgba(255, 99, 132, 0.8)',
    borderColor: 'rgba(255, 99, 132, 1)',
    borderWidth: 1
  }]
};

// Options pour les deux graphiques
const chartOptions = {
  scales: {
    y: {
      beginAtZero: true
    }
  }
};

// Méthode pour créer un graphique
const createChart = (canvasRef, chartData) => {
  if (canvasRef.value) {
    new Chart(canvasRef.value, {
      type: 'bar',
      data: chartData,
      options: chartOptions
    });
  }
};

// Créer les graphiques après le montage du composant
onMounted(() => {
  createChart(chartVentesCanvas, chartDataVentes);
  createChart(chartAchatsCanvas, chartDataAchats);
});
</script>

<template>
    <div class="home-container" id="appi">
        <div class="top" >
            <div style="width: 100%; margin: 10px 0;">
              <h2> Tableau de bord</h2>
            </div>
            <div style="width: 80%;display: flex; gap: 20px; margin: auto; justify-content: space-between;">
              <div class="prix b">
                <h2>$</h2>
                <div class="c">
                  <p> Prix du Stock </p>
                  <h3>U$ 38,631</h3>
                </div>
              </div>
              <div class="profit b">
                <img src="/src/assets/Profit.svg" alt="">
                <div class="c">
                  <p> Profit </p>
                  <h3>U$ 38,631</h3>
                </div>
              </div>
              <div class="depense b">
                <img src="/src/assets/Depens.svg" alt="">
                <div class="c">
                  <p> Depense </p>
                  <h3>U$ 6,312</h3>
                </div>
              </div>
              <div class="profit b">
                <img src="/src/assets/cil_people.svg" alt="">
                <div class="c">
                  <p> Clients </p>
                  <h3>2011</h3>
                </div>
              </div>
            </div>
            <div style="display: flex; justify-content: space-between; width: 80%; margin: auto; row-gap: 100px;">
                <div>
                    <canvas ref="chartVentesCanvas"></canvas>
                </div>            
                <div>
                    <canvas ref="chartAchatsCanvas"></canvas>
                </div>
            </div>
        </div>   
        <div class="bottom">
          <div class="palab">
            <h3> Stock</h3>
            <table >
                <thead style="border: solid DADADA;">
                    <tr>
                       <th style="width: 40%;">Produit</th>
                        <th style="width: 15%;">Qte</th>
                        <th style="width: 15%;">Min. Qte</th>
                        <th style="width: 15%;">Prix d'entrée</th>
                        <th style="width: 15%;">Prix</th> 
                    </tr>                                 
                </thead>
                <tbody>
                    <tr>
                        <td>Fer</td>
                        <td>92</td>
                        <td>101</td>
                        <td>U$ 28.27</td>
                        <td>U$ 42.50</td>
                    </tr>
                    <tr style="background-color: #ffffff;">
                        <td>Plumb</td>
                        <td>95</td>
                        <td>11</td>
                        <td>U$ 28.27</td>
                        <td>U$ 42.50</td>
                    </tr>
                    <tr>
                        <td>Gaz</td>
                        <td>91</td>
                        <td>1</td>
                        <td>U$ 28.27</td>
                        <td>U$ 42.50</td>
                    </tr>
                    <tr>
                        <td>Or</td>
                        <td>9</td>
                        <td>19</td>
                        <td>U$ 28.27</td>
                        <td>U$ 42.50</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="palab">
            <h3> Low Stock</h3>
            <table >
                <thead style="border: solid #DADADA;">
                    <tr>
                        <th style="width: 40%;">Produit</th>
                        <th style="width: 15%;">Qte</th>
                        <th style="width: 15%;">Min. Qte</th>
                        <th style="width: 15%;">Prix d'entrée</th>
                        <th style="width: 15%;">Prix</th> 
                    </tr>                    
                </thead>
                <tbody>
                    <tr>
                        <td>Fer</td>
                        <td>92</td>
                        <td>10</td>
                        <td>U$ 28.27</td>
                        <td>U$ 42.50</td>
                    </tr>
                    <tr style="background-color: #ffffff;">
                        <td>Outil</td>
                        <td>92</td>
                        <td>12</td>
                        <td>U$ 28.27</td>
                        <td>U$ 42.50</td>
                    </tr>
                    <tr>
                        <td>Salt</td>
                        <td>92</td>
                        <td>11</td>
                        <td>U$ 28.27</td>
                        <td>U$ 42.50</td>
                    </tr>
                </tbody>
            </table>
        </div>
   </div>
  </div>
</template>

<style scoped>
  h2{
    font-size: 30px;
    margin: 0;
    padding: 0;
    
  }
  .c{
    line-height: 2px;
    text-align: left;
  }
  .b{
    display: flex;
    align-items: center;
    gap: 10px;
    background-color: #f0f0f0;
    border-radius: 10px;
    padding: 0 20px;
  }
  .b p{
    font-size: 12px;
  }
.home-container{
height: 100%;
width: 100%;
margin:0;
padding:0;
display: flex;
flex-direction: column;
}

h1{
color: black;
}
.top{
height: 50%;
width: 100%;
background: linear-gradient(135deg, #fbc2eb, #a6c1ee, #fad0c4);
display: flex;
flex-direction: column;
justify-content: left;
line-height: 5px;
gap: 5px;
padding-top: 20px;
}
.bottom{
height: 50%;
width: 100%;
overflow: auto;
background-color: #ffffff;
}
.bottom::-webkit-scrollbar {
  width: 5px; 
}


#appi {
font-family: 'Avenir', Helvetica, Arial, sans-serif;
text-align: center;
color: #000000;
  }
canvas {
background-color: #f0f0f0;
padding: 20px;
border-radius: 10px;
width: 100%;
}
.palab{
   border-radius: 3px; 
   background-color:#DADADA ; 
   text-align: center; 
   margin-top: 5px;
   border-radius: 6px;
   margin-bottom: 20px;
}
table {
    width: 100%;
    border-collapse: collapse;
}

table, th, td {
    border: 1px solid #DADADA;
}

th, td {
    padding: 10px;
    text-align: left;
}

tbody tr:nth-child(odd) {
    background-color: #f2f2f2;
}
</style>
