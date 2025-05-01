<template>
  <table class="table-fixed w-full mb-4">
    <tbody>
      <tr>
        <td class="align-top">{{ name }}</td>
        <td class="align-top">{{ house }}</td>
        <td class="align-top">
          <a v-if="email" :href="`mailto:${email}`">{{ email }}</a>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
  const props = defineProps({
    name: {
      type: String,
    },
    house: {
      type: String,
    },
    phone: {
      type: String,
    },
    email: {
      type: String,
    },
  })
</script>

<style scoped lang="scss">

</style>