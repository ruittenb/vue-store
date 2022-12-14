<script setup>
import ProductTile from '../components/ProductTile.vue';
import ProductsClient from '../clients/ProductsClient';

let productsClient = new ProductsClient();
productsClient.list(1, 10).then((result) => {
  console.log(result);
});

</script>

<template>
  <ProductTile name="Accu boorhamer" />
  {{
  }}
</template>
