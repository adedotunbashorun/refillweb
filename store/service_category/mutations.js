
import {
  ADD_SUBCATEGORY,
  ADD_SUBCATEGORY_SUCCESS,
  SUBCATEGORY_BY_ID,
  SUBCATEGORY_BY_ID_SUCCESS,
  UPDATE_SUBCATEGORY,
  UPDATE_SUBCATEGORY_SUCCESS,
  REMOVE_SUBCATEGORY,
  REMOVE_SUBCATEGORY_SUCCESS,
  REMOVE_SUBCATEGORY_FAILURE,
  ALL_SUBCATEGORIES,
  ALL_SUBCATEGORIES_SUCCESS,
  ERROR_MSG,
  SUBCATEGORY_BY_ID_FAILURE,
  ALL_SUBCATEGORIES_FAILURE,
  UPDATE_SUBCATEGORY_FAILURE,
  ADD_SUBCATEGORY_FAILURE,
} from './mutation-types'

export const mutations = {
  [ALL_SUBCATEGORIES] (state) {
    state.showLoader = true
  },
  [ALL_SUBCATEGORIES_SUCCESS] (state, payload) {
    state.showLoader = false
    state.service_categories = payload.subcategories
  },
  [ALL_SUBCATEGORIES_FAILURE](state, payload) {
    state.showLoader = false
    state.error = payload
    state.SUBCATEGORYs = []
  },

  [SUBCATEGORY_BY_ID] (state) {
    state.showLoader = true
  },
  [SUBCATEGORY_BY_ID_SUCCESS] (state, payload) {
    state.showLoader = false
  },
  [SUBCATEGORY_BY_ID_FAILURE](state, payload) {
    state.showLoader = false
    state.error = payload
  },
  [ADD_SUBCATEGORY]: (state) => {
    state.showLoader = true
  },
  [ADD_SUBCATEGORY_SUCCESS]: (state, payload) => {
    state.showLoader = false
  },
  [ADD_SUBCATEGORY_FAILURE]: (state, payload) => {
    state.showLoader = false
    state.error = payload
  },
  [UPDATE_SUBCATEGORY]: (state) => {
    state.showLoader = true
  },
  [UPDATE_SUBCATEGORY_SUCCESS]: (state, payload) => {
    state.showLoader = false
    state.service_category = payload.subcategory
  },
  [UPDATE_SUBCATEGORY_FAILURE]: (state, payload) => {
    state.showLoader = false
    state.error = payload
  },
  [REMOVE_SUBCATEGORY]: (state, payload) => {
    state.showLoader = true
  },
  [REMOVE_SUBCATEGORY_SUCCESS]: (state, payload) => {
    state.showLoader = false
    const index = state.service_category.findIndex(service_category => service_category._id === payload)
    console.debug('index', index)
    state.service_category.splice(index, 1)
  },
  [REMOVE_SUBCATEGORY_FAILURE]: (state, payload) => {
    state.showLoader = false
  },
  [ERROR_MSG] (state, payload) {}
}


