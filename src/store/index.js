import { createStore } from 'vuex'
import { createPlayer } from '@/firebase'

export default createStore({
  state: {
    loading: false,
    showHeader: true,
    form: {name: '', code: ''},
    player: ''
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
    setPlayer(state, data) {
      state.player = data;
    },
  },
  actions: {
    async createPlayer(ctx, data) {
      console.log("ACTIONS");
      const player = await createPlayer(data)
      console.log("PLAYER:",player);
      ctx.commit('setPlayer', player)
    }
  }
})
