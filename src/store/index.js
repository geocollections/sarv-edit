import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
Vue.use(Vuex)

export function createStore () {

  return new Vuex.Store({
    state: {
      sampleView: true,
      currentUser:null,
      createRelationWith: { object: null, data: null, info: null },
      activeObject: null,
      sidebarList:[],
      activeSearchParams: null
    },
    actions,
    mutations,
    getters
  })
}
