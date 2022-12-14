<script setup>
import { computed } from 'vue'
const props = defineProps(['product']);

const PLACEHOLDER_IMG_SRC = '404.jpg';

const imgSrc = computed(() => {
  if (Array.isArray(props.product.image) && props.product.image.length > 0) {
    return props.product.image[0];
  }
  return PLACEHOLDER_IMG_SRC;
});

</script>

<template>
  <div class="product-tile">
    <img :src="imgSrc">
    <span>
    Dit is een tegelweergave van het product {{ JSON.stringify(product) }}
    </span>
  </div>
</template>

<style>
.product-tile {
  display: flex;
  padding: 3px;
}
.product-tile img {
  width: 100px;
  height: 100px;
}
</style>