<template>
  <button @click="removeConsent">
    Tilbagekald cookie samtykke
  </button>
</template>

<script setup>
  const { gtag, grantConsent, revokeConsent } = useGtag()
  import { getConsentRef } from '~/utils/consent.js';

  const cookieStatus = computed(() => {
    if (!getConsentRef()) return false
    return getConsentRef().getCookieStatus()
  })
  const removeConsent = () => {
    getConsentRef().removeCookie()
    revokeConsent()

    alert('Cookie samtykke tilbagekaldt')
  }
</script>

<style scoped lang="scss">

</style>