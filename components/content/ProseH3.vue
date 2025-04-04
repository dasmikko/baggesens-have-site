<template>
  <h3 :id="id">
    <slot />
  </h3>
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