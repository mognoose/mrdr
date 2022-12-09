import { createStore } from 'vuex'

export default createStore({
  state: {
    loading: false,
    showHeader: true
  },
  getters: {
    loading: state => state.loading,
    showHeader: state => state.showHeader,
  },
  mutations: {
    setLoading(state, data) {
      state.loading = data;
    },
    setShowHeader(state, data) {
      state.showHeader = data;
    },
  },
  actions: {
  }
})
