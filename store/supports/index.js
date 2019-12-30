
import {getters} from './getters'
import {mutations} from './mutations'
import { actions } from './actions'


export default {
  state: {
    error: '',
    support: {},
    supports: [],
    priorities: [],
    showLoader: false,
  },
  mutations,
  getters,
  actions
}
