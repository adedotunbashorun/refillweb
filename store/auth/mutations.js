
import {
  ADD_USER,
  ADD_USER_SUCCESS,
  USER_BY_ID,
  USER_BY_ID_SUCCESS,
  UPDATE_USER,
  UPDATE_USER_SUCCESS,
  REMOVE_USER,
  REMOVE_USER_SUCCESS,
  REMOVE_USER_FAILURE,
  ALL_USERS,
  ALL_USERS_SUCCESS,
  APPROVE_USERS,
  APPROVE_USERS_SUCCESS,
  APPROVE_USERS_FAILURE,
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  ERROR_MSG,
  USER_BY_ID_FAILURE,
  ALL_USERS_FAILURE,
  ACTIVITY,
  ACTIVITY_SUCCESS
} from './mutation-types'

export const mutations = {
  [ALL_USERS] (state) {
    state.showLoader = true
  },
  [ALL_USERS_SUCCESS] (state, payload) {
    state.showLoader = false
    state.users = payload.users
  },
  [ALL_USERS_FAILURE](state, payload) {
    state.showLoader = false
    state.error = payload
    state.users = []
  },
  [APPROVE_USERS] (state) {
    state.showLoader = true
  },
  [APPROVE_USERS_SUCCESS] (state, payload) {
    state.showLoader = false
  },
  [APPROVE_USERS_FAILURE](state, payload) {
    state.showLoader = false
    state.error = payload
  },
  [LOGIN](state) {
    state.showLoader = true
  },
  [LOGIN_SUCCESS](state, [token, user]) {
    state.showLoader = false
    state.user = user
    state.headers =  token
    state.error = ''
    state.token = token
  },
  [LOGIN_FAILURE](state, payload) {
    state.showLoader = false
    state.error = payload
    state.token = ''
    state.user = ''
  },
  [LOGOUT](state) {
    state.showLoader = true
  },
  [LOGOUT_SUCCESS](state, payload) {
    state.showLoader = false
    state.user = {}
    state.headers = ''
    state.error = ''
    state.token = ''
  },
  [LOGOUT_FAILURE](state, payload) {
    state.showLoader = false
    state.user = {}
    state.headers = ''
    state.error = ''
    state.token = ''
  },
  [USER_BY_ID] (state) {
    state.showLoader = true
  },
  [USER_BY_ID_SUCCESS] (state, payload) {
    state.showLoader = false
  },
  [USER_BY_ID_FAILURE](state, payload) {
    state.showLoader = false
    state.error = payload
    state.token = ''
    state.user = ''
  },
  [ADD_USER]: (state, payload) => {
    state.showLoader = true
  },
  [ADD_USER_SUCCESS]: (state, payload) => {
    state.showLoader = false
    state.users.push(payload)
  },
  [UPDATE_USER]: (state, payload) => {
    state.showLoader = true
  },
  [UPDATE_USER_SUCCESS]: (state, payload) => {
    state.showLoader = false
  },
  [REMOVE_USER]: (state, payload) => {
    state.showLoader = true
  },
  [REMOVE_USER_SUCCESS]: (state, payload) => {
    state.showLoader = false
    const index = state.users.findIndex(user => user._id === payload)
    console.debug('index', index)
    state.users.splice(index, 1)
  },
  [REMOVE_USER_FAILURE]: (state, payload) => {
    state.showLoader = false
  },
  [ACTIVITY](state) {
    state.showLoader = true
  },
  [ACTIVITY_SUCCESS](state, payload) {
    state.showLoader = false
  },
  [ERROR_MSG] (state, payload) {}
}


