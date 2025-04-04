<template>
  <h2 :id="id">
    <slot />
  </h2>
</template>

<script setup>
const props = defineProps({
  id: {
    type: String
  }
})

</script>

<style scoped lang="scss">

</style>