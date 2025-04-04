<script setup>
import PhotoSwipeLightbox from 'photoswipe/lightbox'
import {onMounted} from 'vue';


const lightbox = new PhotoSwipeLightbox({
  // may select multiple "galleries"
  gallery: '.photoswipe',

  // Elements within gallery (slides)
  children: 'a.photoswipe__link',

  // setup PhotoSwipe Core dynamic import
  pswpModule: () => import('photoswipe')
});


onMounted(() => {
  // initialize lightbox
  lightbox.init();
});
</script>

<template>
  <div class="content container mx-auto px-8 lg:px-64 py-8 min-h-[calc(100vh-24rem)]">
    <ContentDoc />
  </div>
</template>