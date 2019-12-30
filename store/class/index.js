
import {getters} from './getters'
import {mutations} from './mutations'
import { actions } from './actions'


export default {
  state: {
    classes: [],
    error: '',
    class: {},
    showLoader: false,
  },
  mutations,
  getters,
  actions
}
