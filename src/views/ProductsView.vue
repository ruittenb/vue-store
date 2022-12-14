<script setup>
import { ref, onMounted } from 'vue';
import ProductsList from '../components/ProductsList.vue';
import ProductsClient from '../clients/ProductsClient';

const shownPages = ref(0);
const pageSize = ref(12);
const productsList = ref([]);
const productsClient = new ProductsClient();

function loadNextPage() {
    productsClient.list(shownPages.value + 1, pageSize.value).then((newProducts) => {
      shownPages.value += 1;
      const oldProductsList = productsList.value;
      productsList.value = [ ...oldProductsList, ...newProducts ];
    });
}

onMounted(() => loadNextPage());

</script>

<template>
  <div class="products">
    <h1>Wij hebben de volgende spullen in ons assortiment</h1>
    <ProductsList :products="productsList" />
    <button @click="loadNextPage()">Meer laden...</button>
  </div>

</template>

<style>
.products {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>
