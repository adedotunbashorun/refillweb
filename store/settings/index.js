
import {getters} from './getters'
import {mutations} from './mutations'
import { actions } from './actions'


export default {
  state: {
    error: '',
    settings: {},
    data: {},
    showLoader: false,
  },
  mutations,
  getters,
  actions
}
