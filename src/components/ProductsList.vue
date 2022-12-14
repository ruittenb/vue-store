<script setup>
import ProductTile from '../components/ProductTile.vue';

const props = defineProps(['products']);
</script>

<template>
  <ProductTile v-for="product in products" />
</template>
