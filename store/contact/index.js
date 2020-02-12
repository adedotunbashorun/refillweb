import {getters} from './getters'
import {mutations} from './mutations'
import { actions } from './actions'


export default {
  state: {
    contacts: [],
    error: '',
    contact: {},
    showLoader: false,
  },
  mutations,
  getters,
  actions
}
