
import {
  ADD_QUESTION,
  ADD_QUESTION_SUCCESS,
  QUESTION_BY_ID,
  QUESTION_BY_ID_SUCCESS,
  UPDATE_QUESTION,
  UPDATE_QUESTION_SUCCESS,
  REMOVE_QUESTION,
  REMOVE_QUESTION_SUCCESS,
  REMOVE_QUESTION_FAILURE,
  ALL_QUESTIONS,
  ALL_QUESTIONS_SUCCESS,
  ERROR_MSG,
  QUESTION_BY_ID_FAILURE,
  ALL_QUESTIONS_FAILURE,
  UPDATE_QUESTION_FAILURE,
  ADD_QUESTION_FAILURE,
} from './mutation-types'

export const mutations = {
  [ALL_QUESTIONS] (state) {
    state.showLoader = true
  },
  [ALL_QUESTIONS_SUCCESS] (state, payload) {
    state.showLoader = false
    state.service_categories = payload.subcategories
  },
  [ALL_QUESTIONS_FAILURE](state, payload) {
    state.showLoader = false
    state.error = payload
    state.questions = []
  },

  [QUESTION_BY_ID] (state) {
    state.showLoader = true
  },
  [QUESTION_BY_ID_SUCCESS] (state, payload) {
    state.showLoader = false
  },
  [QUESTION_BY_ID_FAILURE](state, payload) {
    state.showLoader = false
    state.error = payload
  },
  [ADD_QUESTION]: (state) => {
    state.showLoader = true
  },
  [ADD_QUESTION_SUCCESS]: (state, payload) => {
    state.showLoader = false
  },
  [ADD_QUESTION_FAILURE]: (state, payload) => {
    state.showLoader = false
    state.error = payload
  },
  [UPDATE_QUESTION]: (state) => {
    state.showLoader = true
  },
  [UPDATE_QUESTION_SUCCESS]: (state, payload) => {
    state.showLoader = false
    state.service_category = payload.subcategory
  },
  [UPDATE_QUESTION_FAILURE]: (state, payload) => {
    state.showLoader = false
    state.error = payload
  },
  [REMOVE_QUESTION]: (state, payload) => {
    state.showLoader = true
  },
  [REMOVE_QUESTION_SUCCESS]: (state, payload) => {
    state.showLoader = false
    const index = state.service_category.findIndex(service_category => service_category._id === payload)
    console.debug('index', index)
    state.service_category.splice(index, 1)
  },
  [REMOVE_QUESTION_FAILURE]: (state, payload) => {
    state.showLoader = false
  },
  [ERROR_MSG] (state, payload) {}
}


