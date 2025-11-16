<script setup>
import { onMounted } from 'vue';
import { useProductStore } from './stores/productStore';
import { storeToRefs } from 'pinia';

const productStore = useProductStore();
const { filteredProducts, categories, isLoading, error } = storeToRefs(productStore);

onMounted(() => {
  productStore.fetchProducts();
});

function handleCategoryChange(event) {
  productStore.selectCategory(event.target.value);
}
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </nav>

  <main>
    <h1>Produtos</h1>

    <div class="category">
      <label for="category-select">Filtrar por categoria:</label>
      <select id="category-select" @change="handleCategoryChange">
        <option value="">Todas</option>
        <option v-for="category in categories" :key="category" :value="category">
          {{ category }}
        </option>
      </select>
    </div>


    <p v-if="isLoading">Carregando produtos</p>
    <p v-else-if="error">{{ error }}</p>
    <ul v-else>
      <li v-for="product in filteredProducts" :key="product.id">
        {{ product.title }} - {{ product.price }}
      </li>
    </ul>
  </main>

  <RouterView />
</template>

<style scoped>
nav {
  display: flex;
  gap: 2rem;
  padding: 1.5rem 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

nav a {
  color: white;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: all 0.3s ease;
}

nav a:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

nav a.router-link-active {
  background: rgba(255, 255, 255, 0.3);
}

main {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.category {
  margin-bottom: 1.5rem;
  text-align: center;
}

h1 {
  margin-bottom: 2rem;
  font-size: 2.5rem;
  color: #2c3e50;
  font-weight: 700;
  text-align: center;
}

p {
  text-align: center;
  font-size: 1.2rem;
  color: #667eea;
  font-weight: 500;
}

ul {
  list-style-type: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

li {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

li:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 24px rgba(102, 126, 234, 0.2);
  border-color: #667eea;
}

li::before {
  content: "🛍️";
  font-size: 1.5rem;
  margin-right: 0.5rem;
}
</style>
