<template>
  <div>
    <Navbar />
    <div class="page-wrapper">
      <Nuxt />
    </div>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar'

export default {
  components: {
    Navbar
  }
}

</script>

<style>
body {
  margin: 0;
  padding: 0;
}

.page-wrapper {
  padding: 5rem 2rem 0 2rem;
}
</style>
