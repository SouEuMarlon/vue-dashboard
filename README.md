# 🛍️ Vue Product Dashboard

> Um dashboard moderno e interativo para visualização de produtos, construído com Vue 3, Vite e Pinia.

[![Vue.js](https://img.shields.io/badge/Vue.js-3.5-4FC08D?style=flat&logo=vue.js&logoColor=white)](https://vuejs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.1-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Pinia](https://img.shields.io/badge/Pinia-3.0-FFD859?style=flat&logo=vue.js&logoColor=black)](https://pinia.vuejs.org/)
[![Storybook](https://img.shields.io/badge/Storybook-10.0-FF4785?style=flat&logo=storybook&logoColor=white)](https://storybook.js.org/)

## ✨ Características

- 🎨 **Design Moderno** - Interface elegante com gradientes e animações suaves
- 📊 **Gerenciamento de Estado** - Pinia para state management eficiente
- 🔄 **Dados Dinâmicos** - Integração com FakeStore API + fallback com dados mockados
- 🎭 **Storybook** - Documentação de componentes interativa
- ⚡ **Performance** - Vite para build ultrarrápido
- 🧪 **Testes** - Cypress para teste E2E
- 📱 **Responsivo** - Layout adaptativo com grid CSS moderno
- 🎯 **TypeScript Ready** - JSConfig configurado para melhor DX

## 🚀 Demonstração

O dashboard exibe produtos organizados em cards elegantes com:

- Filtros por categoria
- Visualização em grid responsivo
- Efeitos hover interativos
- Loading states
- Fallback automático se a API estiver offline

## 📦 Tecnologias

- **Vue 3** - Framework JavaScript progressivo
- **Vite** - Build tool de próxima geração
- **Pinia** - State management oficial do Vue
- **Vue Router** - Roteamento SPA
- **Chart.js & vue-chartjs** - Visualizações de dados
- **Storybook** - Design system e documentação
- **Cypress** - Testes de integração e E2E
- **ESLint & Prettier** - Qualidade de código

## 🛠️ Instalação

```sh
# Clone o repositório
git clone https://github.com/SouEuMarlon/vue-dashboard.git

# Entre no diretório
cd vue-dashboard

# Instale as dependências
npm install
```

## 💻 Scripts Disponíveis

### Desenvolvimento

```sh
# Inicia servidor de desenvolvimento
npm run dev
```

### Build

```sh
# Compila e minifica para produção
npm run build

# Preview da build de produção
npm run preview
```

### Storybook

```sh
# Inicia Storybook
npm run storybook

# Build do Storybook
npm run build-storybook
```

### Code Quality

```sh
# Lint e correção automática
npm run lint

# Formatação de código
npm run format
```

## 🎨 Estrutura do Projeto

```
vue-dashboard/
├── src/
│   ├── components/       # Componentes Vue
│   ├── router/          # Configuração de rotas
│   ├── stores/          # Pinia stores
│   │   └── productStore.js
│   ├── App.vue          # Componente raiz
│   └── main.js          # Entry point
├── .storybook/          # Configuração Storybook
├── public/              # Assets estáticos
└── vite.config.js       # Configuração Vite
```

## 🌐 Configuração IDE Recomendada

### Editor

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

**Importante:** Desabilite a extensão Vetur se estiver instalada.

### Extensões do Navegador

**Chromium (Chrome, Edge, Brave):**

- [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
- [Ativar Custom Object Formatter](http://bit.ly/object-formatters)

**Firefox:**

- [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
- [Ativar Custom Object Formatter](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## 📝 Requisitos do Sistema

- **Node.js**: ^20.19.0 || >=22.12.0
- **npm**: 9.0.0 ou superior

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

## 📄 Licença

Este projeto é open source e está disponível sob a licença MIT.

## 🔗 Links Úteis

- [Documentação Vue 3](https://vuejs.org/)
- [Documentação Vite](https://vite.dev/)
- [Documentação Pinia](https://pinia.vuejs.org/)
- [Guia Storybook](https://storybook.js.org/docs)

---

Desenvolvido com ❤️ por [Marlon](https://github.com/SouEuMarlon)
