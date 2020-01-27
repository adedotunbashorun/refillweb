
import {
  PAYMENT_BY_ID,
  PAYMENT_BY_ID_SUCCESS,
  PAYMENT_BY_ID_FAILURE,
  ALL_PAYMENT,
  ALL_PAYMENT_SUCCESS,
  ERROR_MSG,
  ALL_PAYMENT_FAILURE,
} from './mutation-types'

export const mutations = {
  [ALL_PAYMENT] (state) {
    state.showLoader = true
  },
  [ALL_PAYMENT_SUCCESS] (state, payload) {
    state.showLoader = false
    state.payments = payload.payments
  },
  [ALL_PAYMENT_FAILURE](state, payload) {
    state.showLoader = false
    state.error = payload
    state.payments = []
  },

  [PAYMENT_BY_ID] (state) {
    state.showLoader = true
  },
  [PAYMENT_BY_ID_SUCCESS] (state, payload) {
    state.showLoader = false
  },
  [PAYMENT_BY_ID_FAILURE](state, payload) {
    state.showLoader = false
    state.error = payload.payments
  },
  [ERROR_MSG] (state, payload) {}
}


