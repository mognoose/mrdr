import { createStore } from 'vuex'

export default createStore({
  state: {
    loading: false,
    showHeader: true,
    form: {name: '', code: ''}
  },
  getters: {
    loading: state => state.loading,
    showHeader: state => state.showHeader,
    form: state => state.form,
  },
  mutations: {
    setLoading(state, data) {
      state.loading = data;
    },
    setShowHeader(state, data) {
      state.showHeader = data;
    },
    setForm(state, data) {
      state.form = data;
    },
  },
  actions: {
  }
})
