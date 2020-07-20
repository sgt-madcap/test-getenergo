<template>
  <div class="catalog-menu-wrapper">
    <div class="catalog-menu-header">
      <h5 class="catalog-title">
        {{ title }}:
      </h5>
      <i class="material-icons catalog-menu-button" @click="showCatalog = !showCatalog">
        {{ showCatalog ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}
      </i>
    </div>

    <ul v-if="showCatalog" class="catalog-list">
      <li v-for="cat in categories" :key="cat.id" @click="getRoute(cat.category_id)">
        <nuxt-link :to="`/catalog/${cat.url}`">
          {{ cat.name }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    categories: {
      type: Array,
      // eslint-disable-next-line vue/require-valid-default-prop
      default: []
    },
    title: {
      type: String,
      default: 'Название'
    }
  },
  data: () => ({
    showCatalog: true
  }),
  methods: {
    getRoute (id) {
      this.$store.dispatch('getCurrentCategories', id)
      console.log(id)
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'assets/_variables';

.catalog-menu-wrapper {
  display: flex;
  flex-direction: column;
  width: 500px;
  background-color: $catalog-background-color;
  display: flex;

  .catalog-menu-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 5px 20px 5px 20px;
    background-color: #e0e0e0;

    .catalog-title {
      margin: 0;
    }

    .catalog-menu-button {
      cursor: pointer
    }
  }

  .catalog-list {
    list-style: none;
    padding: 20px;

    li {
      padding: 5px 0 5px 0;
      transition: all 0.5s;
      cursor: pointer;

      &:hover {
        background-color: $catalog-link-hover-color;
      }
    }

    li a {
      display: block;
      text-decoration: none;
      color: $catalog-link-color
    }
  }
}
</style>
