import {getters} from './getters'
import {mutations} from './mutations'
import { actions } from './actions'


export default {
  state: {
    contacts: [],
    error: '',
    contact: null,
    messages: [],
    message: null,
    showLoader: false,
  },
  mutations,
  getters,
  actions
}
