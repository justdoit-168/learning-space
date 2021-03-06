/*
 * @Date           : 2021-07-09 01:11:11
 * @FilePath       : /learning-space/src/store/index.js
 * @Description    : 
 */
import Vue from 'vue'
import Vuex from 'vuex'

 
import right_menu from "src/store/module/right_menu.js"

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */


export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
  
      right_menu
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  })

  return Store
}
