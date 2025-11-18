<script setup>
// Definimos o que o componente RECEBE (Props)
defineProps({
  categories: {
    type: Array,
    required: true,
    default: () => []
  }
})

// Definimos o que o componente EMITE (Eventos)
const emit = defineEmits(['update:category'])

function onSelect(event) {
  emit('update:category', event.target.value)
}
</script>

<template>
  <div class="category">
    <label for="category-select">Filtrar por categoria: </label>
    <select id="category-select" @change="onSelect">
      <option value="">Todas</option>
      <option v-for="category in categories" :key="category" :value="category">
        {{ category }}
      </option>
    </select>
  </div>
</template>

<style scoped>
.category {
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
  display: inline-block;
}

select {
  padding: 5px;
  margin-left: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
}
</style>
