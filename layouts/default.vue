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
  },
  async fetch () {
    // const { data: { items } } = await this.$axios.get('/api/catalog/categories?limit=0')
    // this.items = items
    await this.$store.dispatch('fetchItems')
    // console.log(data)
  },
  data: () => ({
    items: []
  })
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
