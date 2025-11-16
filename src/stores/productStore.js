import { defineStore } from 'pinia'

export const useProductStore = defineStore('productStore', {
  state: () => ({
    products: [],
    isLoading: false,
    error: null,
    selectedCategory: null,
  }),
  getters: {

    // 2. Getter para produtos filtrados por categoria
    filteredProducts: (state) => {
      if (!state.selectedCategory) {
        return state.products // Se nada for selecionado, retorna todos os produtos
      }
      return state.products.filter(
        (product) => product.category === state.selectedCategory
      )
    },
    // 3. Getter para categorias únicas
    categories: (state) => {
      // Cria um Set (que só aceita valores únicos) a partir das categorias dos produtos
      const uniqueCategories = new Set(
        state.products.map((product) => product.category)
      )
      // Retorna um array a partir do Set
      return Array.from(uniqueCategories)
    }
  },
  actions: {
    // 4. Action para atualizar o filtro

    selectCategory(category) {
      this.selectedCategory = category
    },
    async fetchProducts() {
      this.isLoading = true
      this.error = null
      try {
        const response = await fetch('https://fakestoreapi.com/products')
        if (!response.ok) {
          throw new Error('Failed to fetch products')
        }
        this.products = await response.json()
      } catch (err) {
        this.error = err.message
      } finally {
        this.isLoading = false
      }
    },
  },
})

