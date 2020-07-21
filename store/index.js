import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({

  state: {
    allItems: [],
    currentCategories: []
  },
  mutations: {
    setItems (state, allItems) {
      state.allItems = allItems
    },
    setCurrentCategories (state, currentCategories) {
      state.currentCategories = currentCategories
    }
  },
  actions: {
    async fetchItems ({ commit, dispatch }) {
      try {
        const { data: { items } } = await this.$axios.get('/api/catalog/categories?limit=0')
        commit('setItems', items)
        dispatch('getCurrentCategories')
      } catch (e) {
        console.error(e)
      }
    },
    getCurrentCategories ({ commit }, payload) {
      const newCategories = []
      if (!payload) {
        this.state.allItems.forEach((item) => {
          if (!item.parent_id) {
            newCategories.push(item)
          }
        })
      } else {
        this.state.allItems.forEach((item) => {
          if (item.parent_id === payload) {
            newCategories.push(item)
          }
        })
      }
      commit('setCurrentCategories', newCategories)
    }
  },
  getters: {
    allItems: s => s.allItems,
    currentCategories: s => s.currentCategories
  }
})

export default store
