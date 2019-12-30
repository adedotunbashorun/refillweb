
import {getters} from './getters'
import {mutations} from './mutations'
import { actions } from './actions'


export default {
  state: {
    error: '',
    settings: {},
    showLoader: false,
  },
  mutations,
  getters,
  actions
}
