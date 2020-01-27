
import {getters} from './getters'
import {mutations} from './mutations'
import { actions } from './actions'


export default {
  state: {
    payments: [],
    error: '',
    payment: {},
    showLoader: false,
  },
  mutations,
  getters,
  actions
}
