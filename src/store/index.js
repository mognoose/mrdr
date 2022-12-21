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
    player: state => state.player,
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
      const player = await createPlayer(data)
      localStorage.setItem('player', player.id);
      ctx.commit('setPlayer', player.id);
    },
    loadPlayer(ctx) {
      console.log('localStorage: ',localStorage.getItem('player'));
      if(localStorage.getItem('player')){
        ctx.commit('setPlayer', localStorage.getItem('player'));
      }
    }
  }
})
