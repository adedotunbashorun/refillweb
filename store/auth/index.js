
import {getters} from './getters'
import {mutations} from './mutations'
import { actions } from './actions'


export default {
  state: {
    users: [],
    headers:'',
    error: '',
    user: {},
    token: '',
    showLoader: false,
  },
  mutations,
  getters,
  actions
}
