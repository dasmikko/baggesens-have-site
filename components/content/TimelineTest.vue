<template>
  <div class="card">
    <Timeline :value="events">
      <template #content="slotProps">
        {{ slotProps.item.status }}
      </template>
    </Timeline>
  </div>
</template>

<script setup>
import { ref } from "vue";

const events = ref([
  { status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0'},
  { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
  { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
  { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' }
]);
</script>

<style scoped lang="scss">

</style>