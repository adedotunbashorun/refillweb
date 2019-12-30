
import {
  ADD_SUPPORT,
  ADD_SUPPORT_SUCCESS,
  SUPPORT_BY_ID,
  SUPPORT_BY_ID_SUCCESS,
  UPDATE_SUPPORT,
  UPDATE_SUPPORT_SUCCESS,
  REMOVE_SUPPORT,
  REMOVE_SUPPORT_SUCCESS,
  REMOVE_SUPPORT_FAILURE,
  ALL_SUPPORT,
  ALL_SUPPORT_SUCCESS,
  ERROR_MSG,
  SUPPORT_BY_ID_FAILURE,
  ALL_SUPPORT_FAILURE,
  UPDATE_SUPPORT_FAILURE,
  ADD_SUPPORT_FAILURE,
  ALL_PRIORITIES,
  ALL_PRIORITIES_SUCCESS,
  ALL_PRIORITIES_FAILURE
} from './mutation-types'

export const mutations = {
  [ALL_SUPPORT] (state) {
    state.showLoader = true
  },
  [ALL_SUPPORT_SUCCESS] (state, payload) {
    state.showLoader = false
    state.supports = payload.supports
  },
  [ALL_SUPPORT_FAILURE](state, payload) {
    state.showLoader = false
    state.error = payload
  },

  [ALL_PRIORITIES] (state) {
    state.showLoader = true
  },
  [ALL_PRIORITIES_SUCCESS] (state, payload) {
    state.showLoader = false
    state.priorities = payload.priorities
  },
  [ALL_PRIORITIES_FAILURE](state, payload) {
    state.showLoader = false
    state.error = payload
  },

  [SUPPORT_BY_ID] (state) {
    state.showLoader = true
  },
  [SUPPORT_BY_ID_SUCCESS] (state, payload) {
    state.showLoader = false,
    state.support = payload.support
  },
  [SUPPORT_BY_ID_FAILURE](state, payload) {
    state.showLoader = false
    state.error = payload
  },
  [ADD_SUPPORT]: (state) => {
    state.showLoader = true
  },
  [ADD_SUPPORT_SUCCESS]: (state, payload) => {
    state.showLoader = false
    state.supports.push(payload)
  },
  [ADD_SUPPORT_FAILURE]: (state, payload) => {
    state.showLoader = false
    state.error = payload
  },
  [UPDATE_SUPPORT]: (state) => {
    state.showLoader = true
  },
  [UPDATE_SUPPORT_SUCCESS]: (state, payload) => {
    state.showLoader = false
    state.support = payload.support
  },
  [UPDATE_SUPPORT_FAILURE]: (state, payload) => {
    state.showLoader = false
    state.error = payload
  },

  [ERROR_MSG] (state, payload) {}
}


