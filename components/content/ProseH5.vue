<template>
  <h5 :id="id">
    <slot />
  </h5>
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