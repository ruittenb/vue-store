<script setup>
  import ProductsList from "../components/ProductsList.vue";
</script>
<template>
  <div class="products">
    <h1>Wij hebben de volgende spullen in ons assortiment</h1>
  </div>

  <ProductsList />
</template>

<style>
.products {
  margin-top: 20px;
  display: flex;
  align-items: center;
}
</style>
