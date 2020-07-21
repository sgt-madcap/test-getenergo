<template>
  <div>
    <catalog-menu title="Каталог" :categories="currentCategories" />
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
    ...mapGetters(['currentCategories', 'allItems']),
    catalogRoute () {
      const path = this.$route.params.pathMatch
      const id = this.allItems.find(el => el.url === path).category_id
      if (path) {
        this.$store.dispatch('getCurrentCategories', id)
      } else {
        this.$store.dispatch('getCurrentCategories')
      }
      return path
    }
  }
}
</script>
