import ProductFilter from '../components/ProductFilter.vue';

// Configuração Principal da História
export default {
  title: 'Dashboard/ProductFilter', // Onde vai aparecer na barra lateral
  component: ProductFilter,
  tags: ['autodocs'], // Gera uma documentação automática bonitinha
  argTypes: {
    // Isso ajuda a gente a ver no painel "Actions" quando o evento é emitido
    'onUpdate:category': { action: 'update:category' },
  },
};

// Variação 1: Estado Padrão (Com categorias)
export const Default = {
  args: {
    categories: ['electronics', 'jewelery', 'men\'s clothing', 'women\'s clothing'],
  },
};

// Variação 2: Estado Vazio (O que acontece se não tiver categorias?)
export const Empty = {
  args: {
    categories: [],
  },
};
