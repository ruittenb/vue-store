<script setup>
import { ref, onMounted } from 'vue';
import ProductsList from '../components/ProductsList.vue';
import ProductsClient from '../clients/ProductsClient';

const shownPages = ref(0);
const pageSize = ref(12);
const productsList = ref([]);
const productsClient = new ProductsClient();

function loadNextPage() {
    productsClient.list(shownPages.value + 1, pageSize.value).then((result) => {
      shownPages.value += 1;
      console.log('Shown pages:', shownPages, " Result: ", result);
      //productsList.value.push(result);
    });
}

onMounted(() => loadNextPage);

</script>

<template>
  <div class="products">
    <h1>Wij hebben de volgende spullen in ons assortiment</h1>
  </div>

  <ProductsList :products="productsList" />
</template>

<style>
.products {
  margin-top: 20px;
  display: flex;
  align-items: center;
}
</style>
