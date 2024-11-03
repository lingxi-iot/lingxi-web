
import { createStore } from 'vuex'
import { Inspiration } from '../lib/inspiration';


export default createStore({
  state: {
    inspiration:Inspiration,
  },
  mutations: {
    setInspiration(state, inspiration:Inspiration)
    {
      state.inspiration=inspiration;
    }
  },
  actions: {
    createInspiration(ctx,inspiration:Inspiration)
    {
      ctx.commit('setInspiration', inspiration);
    }
  },
  getters: {
    getInspiration(state)
    {
      return state.inspiration;
    }
  }
})