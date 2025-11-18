<script setup>
import { computed } from 'vue'
import { useProductStore } from '@/stores/productStore'
import { storeToRefs } from 'pinia'

// Importações do Chart.js
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'

// Registra os componentes do Chart.js que vamos usar
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
)

// Pega a store e os dados
const productStore = useProductStore()
const { categories, products } = storeToRefs(productStore)

// Opções do gráfico (opcional, mas bom para customizar)
const chartOptions = {
  responsive: true,
  maintainAspectRatio: false
}

// Computa os dados para o formato que o Chart.js espera
const chartData = computed(() => {
  // Objeto para contar produtos por categoria
  const categoryCount = {}

  // Inicializa o contador para cada categoria
  categories.value.forEach(category => {
    categoryCount[category] = 0
  })

  // Conta os produtos
  products.value.forEach(product => {
    if (categoryCount[product.category] !== undefined) {
      categoryCount[product.category]++
    }
  })

  return {
    // As "labels" (nomes no eixo X)
    labels: categories.value,
    datasets: [
      {
        label: 'Nº de Produtos',
        backgroundColor: '#41B883', // Um verde bonito do Vue :)
        // Os dados (contagem) no eixo Y
        data: Object.values(categoryCount)
      }
    ]
  }
})
</script>

<template>
  <div class="chart-container">
    <h2>Produtos por Categoria</h2>
    <Bar :data="chartData" :options="chartOptions" />
  </div>
</template>

<style scoped>
.chart-container {
  width: 80%;
  max-width: 600px;
  height: 400px;
  /* Precisa de uma altura definida */
  margin: 40px auto;
}
</style>
