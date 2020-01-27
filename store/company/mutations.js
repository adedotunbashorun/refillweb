
import {
  ADD_COMPANY,
  ADD_COMPANY_SUCCESS,
  COMPANY_BY_ID,
  COMPANY_BY_ID_SUCCESS,
  UPDATE_COMPANY,
  UPDATE_COMPANY_SUCCESS,
  REMOVE_COMPANY,
  REMOVE_COMPANY_SUCCESS,
  REMOVE_COMPANY_FAILURE,
  ALL_COMPANY,
  ALL_COMPANY_SUCCESS,
  ERROR_MSG,
  COMPANY_BY_ID_FAILURE,
  ALL_COMPANY_FAILURE,
  UPDATE_COMPANY_FAILURE,
  ADD_COMPANY_FAILURE
} from './mutation-types'

export const mutations = {
  [ALL_COMPANY] (state) {
    state.showLoader = true
  },
  [ALL_COMPANY_SUCCESS] (state, payload) {
    state.showLoader = false
    state.companies = payload.companies
  },
  [ALL_COMPANY_FAILURE](state, payload) {
    state.showLoader = false
    state.error = payload
    state.companies = []
  },

  [COMPANY_BY_ID] (state) {
    state.showLoader = true
  },
  [COMPANY_BY_ID_SUCCESS] (state, payload) {
    state.showLoader = false
  },
  [COMPANY_BY_ID_FAILURE](state, payload) {
    state.showLoader = false
    state.error = payload
  },
  [ADD_COMPANY]: (state) => {
    state.showLoader = true
  },
  [ADD_COMPANY_SUCCESS]: (state, payload) => {
    state.showLoader = false
    state.companies.push(payload)
  },
  [ADD_COMPANY_FAILURE]: (state, payload) => {
    state.showLoader = false
    state.error = payload
  },
  [UPDATE_COMPANY]: (state) => {
    state.showLoader = true
  },
  [UPDATE_COMPANY_SUCCESS]: (state, payload) => {
    state.showLoader = false
    state.company = payload.company
  },
  [UPDATE_COMPANY_FAILURE]: (state, payload) => {
    state.showLoader = false
    state.error = payload
  },
  [REMOVE_COMPANY]: (state, payload) => {
    state.showLoader = true
  },
  [REMOVE_COMPANY_SUCCESS]: (state, payload) => {
    state.showLoader = false
    const index = state.companies.findIndex(company => company._id === payload)
    console.debug('index', index)
    state.companies.splice(index, 1)
  },
  [REMOVE_COMPANY_FAILURE]: (state, payload) => {
    state.showLoader = false
  },
  [ERROR_MSG] (state, payload) {}
}


