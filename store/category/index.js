
import {getters} from './getters'
import {mutations} from './mutations'
import { actions } from './actions'


export default {
  state: {
    categories: [],
    error: '',
    category: {},
    showLoader: false,
  },
  mutations,
  getters,
  actions
} 
    