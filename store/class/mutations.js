
import {
  ADD_CLASS,
  ADD_CLASS_SUCCESS,
  CLASS_BY_ID,
  CLASS_BY_ID_SUCCESS,
  UPDATE_CLASS,
  UPDATE_CLASS_SUCCESS,
  REMOVE_CLASS,
  REMOVE_CLASS_SUCCESS,
  REMOVE_CLASS_FAILURE,
  ALL_CLASS,
  ALL_CLASS_SUCCESS,
  ERROR_MSG,
  CLASS_BY_ID_FAILURE,
  ALL_CLASS_FAILURE,
  UPDATE_CLASS_FAILURE,
  ADD_CLASS_FAILURE
} from './mutation-types'

export const mutations = {
  [ALL_CLASS] (state) {
    state.showLoader = true
  },
  [ALL_CLASS_SUCCESS] (state, payload) {
    state.showLoader = false
    state.classes = payload.classes
  },
  [ALL_CLASS_FAILURE](state, payload) {
    state.showLoader = false
    state.error = payload
    state.classes = []
  },

  [CLASS_BY_ID] (state) {
    state.showLoader = true
  },
  [CLASS_BY_ID_SUCCESS] (state, payload) {
    state.showLoader = false
  },
  [CLASS_BY_ID_FAILURE](state, payload) {
    state.showLoader = false
    state.error = payload
  },
  [ADD_CLASS]: (state) => {
    state.showLoader = true
  },
  [ADD_CLASS_SUCCESS]: (state, payload) => {
    state.showLoader = false
    state.classes.push(payload)
  },
  [ADD_CLASS_FAILURE]: (state, payload) => {
    state.showLoader = false
    state.error = payload
  },
  [UPDATE_CLASS]: (state) => {
    state.showLoader = true
  },
  [UPDATE_CLASS_SUCCESS]: (state, payload) => {
    state.showLoader = false
    state.class = payload.class
  },
  [UPDATE_CLASS_FAILURE]: (state, payload) => {
    state.showLoader = false
    state.error = payload
  },
  [REMOVE_CLASS]: (state, payload) => {
    state.showLoader = true
  },
  [REMOVE_CLASS_SUCCESS]: (state, payload) => {
    state.showLoader = false
    const index = state.classes.findIndex(CLASS => CLASS._id === payload)
    console.debug('index', index)
    state.classes.splice(index, 1)
  },
  [REMOVE_CLASS_FAILURE]: (state, payload) => {
    state.showLoader = false
  },
  [ERROR_MSG] (state, payload) {}
}


