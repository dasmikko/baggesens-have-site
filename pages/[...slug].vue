<template>
  <div class="content container mx-auto px-8 lg:px-64 py-8 min-h-[calc(100vh-24rem)]">
    <ContentRenderer v-if="page" :value="page" />
  </div>
</template>

<script setup>
import PhotoSwipeLightbox from 'photoswipe/lightbox'
import {onMounted} from 'vue';

const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('content').path(route.path).first()
})

const lightbox = new PhotoSwipeLightbox({
  // may select multiple "galleries"
  gallery: '.content',

  // Elements within gallery (slides)
  children: 'a.photoswipe__link',

  // setup PhotoSwipe Core dynamic import
  pswpModule: () => import('photoswipe')
});

// Set page title and meta description from front-matter
watch(() => page.value, (newPage) => {
  if (newPage) {
    useHead({
      title: newPage.title,
      meta: [
        { name: 'description', content: newPage.description }
      ]
    })
  }
}, { immediate: true })



onMounted(() => {
  // initialize lightbox
  lightbox.init();

  console.log('mounted');
});
</script>

<style scoped lang="scss">

</style>