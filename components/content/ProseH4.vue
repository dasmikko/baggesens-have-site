<template>
  <h4 :id="id">
    <slot />
  </h4>
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