
import {getters} from './getters'
import {mutations} from './mutations'
import { actions } from './actions'


export default {
  state: {
    companies: [],
    error: '',
    company: {},
    showLoader: false,
  },
  mutations,
  getters,
  actions
}
