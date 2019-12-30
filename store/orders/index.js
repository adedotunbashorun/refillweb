
import {getters} from './getters'
import {mutations} from './mutations'
import { actions } from './actions'


export default {
  state: {
    orders: [],
    error: '',
    order: {},
    showLoader: false,
  },
  mutations,
  getters,
  actions
}
