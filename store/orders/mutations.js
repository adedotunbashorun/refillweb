
import {
  ADD_ORDER,
  ADD_ORDER_SUCCESS,
  ORDER_BY_ID,
  ORDER_BY_ID_SUCCESS,
  UPDATE_ORDER,
  UPDATE_ORDER_SUCCESS,
  REMOVE_ORDER,
  REMOVE_ORDER_SUCCESS,
  REMOVE_ORDER_FAILURE,
  ALL_ORDER,
  ALL_ORDER_SUCCESS,
  ERROR_MSG,
  ORDER_BY_ID_FAILURE,
  ALL_ORDER_FAILURE,
  UPDATE_ORDER_FAILURE,
  ADD_ORDER_FAILURE
} from './mutation-types'

export const mutations = {
  [ALL_ORDER] (state) {
    state.showLoader = true
  },
  [ALL_ORDER_SUCCESS] (state, payload) {
    state.showLoader = false
    state.orders = payload.orders
  },
  [ALL_ORDER_FAILURE](state, payload) {
    state.showLoader = false
    state.error = payload
    state.orders = []
  },

  [ORDER_BY_ID] (state) {
    state.showLoader = true
  },
  [ORDER_BY_ID_SUCCESS] (state, payload) {
    state.showLoader = false
    state.order = payload.order
  },
  [ORDER_BY_ID_FAILURE](state, payload) {
    state.showLoader = false
    state.error = payload
  },
  [ADD_ORDER]: (state) => {
    state.showLoader = true
  },
  [ADD_ORDER_SUCCESS]: (state, payload) => {
    state.showLoader = false
    state.orders.push(payload)
  },
  [ADD_ORDER_FAILURE]: (state, payload) => {
    state.showLoader = false
    state.error = payload
  },
  [UPDATE_ORDER]: (state) => {
    state.showLoader = true
  },
  [UPDATE_ORDER_SUCCESS]: (state, payload) => {
    state.showLoader = false
    state.ORDER = payload.ORDER
  },
  [UPDATE_ORDER_FAILURE]: (state, payload) => {
    state.showLoader = false
    state.error = payload
  },
  [REMOVE_ORDER]: (state, payload) => {
    state.showLoader = true
  },
  [REMOVE_ORDER_SUCCESS]: (state, payload) => {
    state.showLoader = false
    const index = state.ORDERes.findIndex(ORDER => ORDER._id === payload)
    console.debug('index', index)
    state.ORDERes.splice(index, 1)
  },
  [REMOVE_ORDER_FAILURE]: (state, payload) => {
    state.showLoader = false
  },
  [ERROR_MSG] (state, payload) {}
}


