
import {getters} from './getters'
import {mutations} from './mutations'
import { actions } from './actions'


export default {
  state: {
    service_categories: [],
    error: '',
    service_category: {},
    showLoader: false,
  },
  mutations,
  getters,
  actions
}
