
import {
  CONTACT_BY_ID,
  CONTACT_BY_ID_SUCCESS,
  REMOVE_CONTACT,
  REMOVE_CONTACT_SUCCESS,
  REMOVE_CONTACT_FAILURE,
  ALL_CONTACT,
  ALL_CONTACT_SUCCESS,
  ERROR_MSG,
  CONTACT_BY_ID_FAILURE,
  ALL_CONTACT_FAILURE,
} from './mutation-types'

export const mutations = {
  [ALL_CONTACT] (state) {
    state.showLoader = true
  },
  [ALL_CONTACT_SUCCESS] (state, payload) {
    state.showLoader = false
    state.contacts = payload.contacts
  },
  [ALL_CONTACT_FAILURE](state, payload) {
    state.showLoader = false
    state.error = payload
    state.contacts = []
  },

  [CONTACT_BY_ID] (state) {
    state.showLoader = true
  },
  [CONTACT_BY_ID_SUCCESS] (state, payload) {
    state.showLoader = false,
    state.contact = payload.contact
  },
  [CONTACT_BY_ID_FAILURE](state, payload) {
    state.showLoader = false
    state.error = payload
    state.contact = null
  },
  [REMOVE_CONTACT]: (state, payload) => {
    state.showLoader = true
  },
  [REMOVE_CONTACT_SUCCESS]: (state, payload) => {
    state.showLoader = false
    const index = state.contacts.findIndex(contact => contact._id === payload)
    console.debug('index', index)
    state.contacts.splice(index, 1)
  },
  [REMOVE_CONTACT_FAILURE]: (state, payload) => {
    state.showLoader = false
  },
  [ERROR_MSG] (state, payload) {}
}


