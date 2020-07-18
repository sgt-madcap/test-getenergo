<template>
  <div>
    <catalog-menu :categories="currentCategories" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CatalogMenu from '~/components/CatalogMenu'

export default {
  components: {
    CatalogMenu
  },
  computed: {
    ...mapGetters(['currentCategories', 'allItems'])
  },
  mounted () {
    this.$store.dispatch('fetchItems')
  }
}
</script>
