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
  data: () => ({

  }),
  computed: {
    ...mapGetters(['currentCategories', 'allItems'])
  },
  mounted () {
    const url = this.$route.params.pathMatch
    const id = this.allItems.find(item => item.url === url).category_id
    this.$store.dispatch('getCurrentCategories', id)
  }
}
</script>
