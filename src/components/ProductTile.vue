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

const productHref = computed(() => {
  console.log(props.product); // TODO
  if (props.product.location) {
    return `/products/${props.product.id}`;
  }
  return '#';
});

</script>

<template>
  <div class="product-tile">
    <span>
      <img :src="imgSrc">
    </span>
    <div>
      <a :href="productHref">{{ product.title }}</a>
      <br />
      <span class="price">{{ `€ ${product.price}` }}</span>
    </div>
  </div>
</template>

<style>
.product-tile {
  display: flex;
  padding: 3px;
  margin: 6px;
  background-color: white;
}
.product-tile:hover {
  background-color: #eee;
}
.product-tile img {
  display: inline-block;
  width: 100px;
  height: 100px;
  margin: 4px 20px 4px 4px;
}
.product-tile .price {
  font-size: 24px;
}
</style>