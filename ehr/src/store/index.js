import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import edehr from './modules/edehr'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    edehr
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
