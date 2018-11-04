import Vue from 'vue'
import Vuex from 'vuex'

import messages from './messages'
import gallery from './gallery'
import {localStoragePlugin} from './plugins'

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
    plugins: [
      localStoragePlugin
    ],
    strict: process.env.NODE_ENV !== 'production'
  })

  return Store
}
