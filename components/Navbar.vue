<template>
  <div class="navbar">
    <div class="flex justify-between items-center h-20 px-4">
      <NuxtLink
        to="/"
        class="logo"
      >
        <span>Baggesens Have</span>
      </NuxtLink>
      <div class="links desktop">
        <NuxtLink
          :key="link.path"
          v-for="link in links"
          :to="link.path"
          :class="link?.class"
        >
          {{ link.name }}
        </NuxtLink>
      </div>
      <div class="links mobile">
        <Menu2Icon @click="toggleMenu" />
      </div>
    </div>
    <div
      v-if="showMenu"
      key="mobile-links"
      class="mobile-links"
    >
      <NuxtLink
        :key="link.path"
        v-for="link in links"
        :to="link.path"
        :class="link?.class"
      >
        {{ link.name }}
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { Menu2Icon } from 'vue-tabler-icons'


const showMenu = ref(false)
const route = useRoute()

const toggleMenu = () => {
  showMenu.value = !showMenu.value
}

const links = [
  {
    name: 'Fælleshus',
    path: '/faelleshus'
  },
  {
    name: 'Bestyrelse',
    path: '/bestyrelse'
  },

]

watch(() => route.path, () => {
  showMenu.value = false
})

</script>

<style lang="scss" scoped>
.navbar {
  @apply bg-opacity-90 bg-green-950 text-white flex flex-col justify-center fixed w-full backdrop-filter backdrop-blur-lg border-b-2 border-b-slate-600 z-50;

  .logo {
    @apply flex gap-4 text-4xl text-white no-underline transition;
    font-family: 'Bebas Neue', sans-serif;

    &:hover {
      @apply  text-amber-300;
    }

    span {
      @apply flex justify-center items-center;
    }
  }

  .links {
    @apply flex gap-8 items-center font-bold;

    &.desktop {
      @apply hidden md:flex;
    }

    &.mobile {
      @apply flex md:hidden;
    }

    a {
      @apply px-4 py-2 rounded-full transition duration-150 text-white no-underline ;

      &:hover {
        @apply bg-green-700;
      }
    }

    .cta {
      @apply bg-green-600 text-slate-200 font-bold rounded-full px-4 py-2 transition duration-150 no-underline;

      &:hover {
        @apply bg-green-700 shadow-xl;
      }
    }
  }

  .mobile-links {
    @apply flex gap-8 flex-col flex-1 justify-start items-start px-4 pb-4 sm:hidden;

    a {
      @apply px-4 py-2 rounded-full transition duration-150 text-white no-underline ;

      &:hover {
        @apply bg-green-700;
      }
    }

    .cta {
      @apply bg-green-600 text-slate-200 font-bold rounded-full px-4 py-2 transition duration-150 no-underline;

      &:hover {
        @apply bg-green-700 shadow-xl;
      }
    }
  }
}
</style>