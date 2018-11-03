import Vue from 'vue'
import Vuex from 'vuex'

import messages from './messages'
import gallery from './gallery'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      messages,
      gallery
    },
    strict: process.env.NODE_ENV !== 'production'
  })

  return Store
}
