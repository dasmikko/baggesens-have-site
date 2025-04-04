<template>
  <div class="image flex-1">
    <a
      :href="link"
      target="_blank"
    ><h3>{{ title }}</h3></a>
    <a
      :href="link"
      target="_blank"
    >
      <div
        :style="imageStyle"
        class="w-full md:w-80 mb-3 aspect-video bg-cover rounded bg-center"
      />
    </a>
    <slot />
    <span v-if="author" class="italic ">Credit til <strong>{{ author }}</strong></span>
  </div>
</template>

<script setup>
const props = defineProps({
  link: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  src: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
})

const imageStyle = computed(() => {
  return `background-image: url(${props.src})`
})

</script>

<style scoped lang="scss">

</style>