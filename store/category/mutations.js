
import {
  ADD_CATEGORY,
  ADD_CATEGORY_SUCCESS,
  CATEGORY_BY_ID,
  CATEGORY_BY_ID_SUCCESS,
  UPDATE_CATEGORY,
  UPDATE_CATEGORY_SUCCESS,
  REMOVE_CATEGORY,
  REMOVE_CATEGORY_SUCCESS,
  REMOVE_CATEGORY_FAILURE,
  ALL_CATEGORYS,
  ALL_CATEGORYS_SUCCESS,
  ERROR_MSG,
  CATEGORY_BY_ID_FAILURE,
  ALL_CATEGORYS_FAILURE,
  UPDATE_CATEGORY_FAILURE,
  ADD_CATEGORY_FAILURE,
  ALL_CATEGORYS_QUESTION_FAILURE,
  ALL_CATEGORYS_QUESTION_SUCCESS,
  ALL_CATEGORYS_QUESTION
} from './mutation-types'

export const mutations = {
  [ALL_CATEGORYS] (state) {
    state.showLoader = true
  },
  [ALL_CATEGORYS_SUCCESS] (state, payload) {
    state.showLoader = false
    state.categories = payload.categories
  },
  [ALL_CATEGORYS_FAILURE](state, payload) {
    state.showLoader = false
    state.error = payload
    state.categories = []
  },

  [ALL_CATEGORYS_QUESTION](state) {
    state.showLoader = true
  },
  [ALL_CATEGORYS_QUESTION_SUCCESS](state, payload) {
    state.showLoader = false
  },
  [ALL_CATEGORYS_QUESTION_FAILURE](state, payload) {
    state.showLoader = false
    state.error = payload
  },

  [CATEGORY_BY_ID] (state) {
    state.showLoader = true
  },
  [CATEGORY_BY_ID_SUCCESS] (state, payload) {
    state.showLoader = false
  },
  [CATEGORY_BY_ID_FAILURE](state, payload) {
    state.showLoader = false
    state.error = payload
  },
  [ADD_CATEGORY]: (state) => {
    state.showLoader = true
  },
  [ADD_CATEGORY_SUCCESS]: (state, payload) => {
    state.showLoader = false
    state.categories.push(payload)
  },
  [ADD_CATEGORY_FAILURE]: (state, payload) => {
    state.showLoader = false
    state.error = payload
  },
  [UPDATE_CATEGORY]: (state) => {
    state.showLoader = true
  },
  [UPDATE_CATEGORY_SUCCESS]: (state, payload) => {
    state.showLoader = false
    state.category = payload.category
  },
  [UPDATE_CATEGORY_FAILURE]: (state, payload) => {
    state.showLoader = false
    state.error = payload
  },
  [REMOVE_CATEGORY]: (state, payload) => {
    state.showLoader = true
  },
  [REMOVE_CATEGORY_SUCCESS]: (state, payload) => {
    state.showLoader = false
    const index = state.categories.findIndex(CATEGORY => CATEGORY._id === payload)
    console.debug('index', index)
    state.categories.splice(index, 1)
  },
  [REMOVE_CATEGORY_FAILURE]: (state, payload) => {
    state.showLoader = false
  },
  [ERROR_MSG] (state, payload) {}
}


