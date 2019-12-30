
import {
  ADD_SETTINGS,
  ADD_SETTINGS_SUCCESS,
  SETTINGS_BY_ID,
  SETTINGS_BY_ID_SUCCESS,
  UPDATE_SETTINGS,
  UPDATE_SETTINGS_SUCCESS,
  REMOVE_SETTINGS,
  REMOVE_SETTINGS_SUCCESS,
  REMOVE_SETTINGS_FAILURE,
  ALL_SETTINGS,
  ALL_SETTINGS_SUCCESS,
  ERROR_MSG,
  SETTINGS_BY_ID_FAILURE,
  ALL_SETTINGS_FAILURE,
  UPDATE_SETTINGS_FAILURE,
  ADD_SETTINGS_FAILURE
} from './mutation-types'

export const mutations = {
  [ALL_SETTINGS] (state) {
    state.showLoader = true
  },
  [ALL_SETTINGS_SUCCESS] (state, payload) {
    state.showLoader = false
    state.settings = payload.settings
  },
  [ALL_SETTINGS_FAILURE](state, payload) {
    state.showLoader = false
    state.error = payload
    state.settings = []
  },

  [SETTINGS_BY_ID] (state) {
    state.showLoader = true
  },
  [SETTINGS_BY_ID_SUCCESS] (state, payload) {
    state.showLoader = false
  },
  [SETTINGS_BY_ID_FAILURE](state, payload) {
    state.showLoader = false
    state.error = payload
  },
  [ADD_SETTINGS]: (state) => {
    state.showLoader = true
  },
  [ADD_SETTINGS_SUCCESS]: (state, payload) => {
    state.showLoader = false
    state.settings.push(payload)
  },
  [ADD_SETTINGS_FAILURE]: (state, payload) => {
    state.showLoader = false
    state.error = payload
  },
  [UPDATE_SETTINGS]: (state) => {
    state.showLoader = true
  },
  [UPDATE_SETTINGS_SUCCESS]: (state, payload) => {
    state.showLoader = false
    state.settings = payload.settings
  },
  [UPDATE_SETTINGS_FAILURE]: (state, payload) => {
    state.showLoader = false
    state.error = payload
  },

  [ERROR_MSG] (state, payload) {}
}


