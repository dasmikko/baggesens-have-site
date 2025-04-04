<template>
  <p>
    <a
      class="button inline-block"
      :href="linkHref"
      target="_blank"
    >Bed om tilbud</a>
  </p>
</template>

<script setup>

import {computed} from 'vue';


const mailSubject = 'Ønske om tilbud'

const linkHref = computed(() => {
  return `mailto:tilbud@holbaek3dprint.dk?subject=${mailSubject}`
 })
</script>

<style scoped lang="scss">
  label {
    @apply block font-bold mb-2;
  }

  .field {
    @apply mb-8 flex-grow;

    &:last-child {
      @apply mb-0;
    }
  }

  .field-group {
    @apply w-full flex gap-4;
  }
</style>