<script setup>

const props = defineProps(['product']);
</script>

<template>
  <div>Dit is een tegelweergave van het product {{ JSON.stringify(props) }}</div>
</template>
