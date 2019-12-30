import { Api } from '../../api'
const cookieparser = process.server ? require('cookieparser') : undefined

import {
  ADD_USER,
  ADD_USER_SUCCESS,
  ADD_USER_FAILURE,
  USER_BY_ID,
  USER_BY_ID_SUCCESS,
  USER_BY_ID_FAILURE,
  UPDATE_USER,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
  REMOVE_USER,
  REMOVE_USER_SUCCESS,
  REMOVE_USER_FAILURE,
  ALL_USERS,
  ALL_USERS_SUCCESS,
  ALL_USERS_FAILURE,
  APPROVE_USERS,
  APPROVE_USERS_SUCCESS,
  APPROVE_USERS_FAILURE,
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  ACTIVITY,
  ACTIVITY_SUCCESS
} from './mutation-types'

export const actions = {
  allUsers({ commit }, header) {
    commit(ALL_USERS)
    return new Promise((resolve, reject) => {
      Api.User.allUser(header).then( response => {
        commit(ALL_USERS_SUCCESS,response.data)
        resolve(response)
      }).catch(err => {
        commit(ALL_USERS_FAILURE, err)
        reject(err)
      })
    })
  },

  approveUser({ commit }, [data,header]) {
    commit(APPROVE_USERS)
    return new Promise((resolve, reject) => {
      Api.User.approveUser(data,header).then( response => {
        commit(APPROVE_USERS_SUCCESS,response.data)
        resolve(response)
      }).catch(err => {
        commit(APPROVE_USERS_FAILURE, err)
        reject(err)
      })
    })
  },

  toggleUserOnlineStatus({ commit }, [data,header]) {
    commit(APPROVE_USERS)
    return new Promise((resolve, reject) => {
      Api.User.toggleUserOnlineStatus(data,header).then( response => {
        commit(APPROVE_USERS_SUCCESS,response.data)
        resolve(response)
      }).catch(err => {
        commit(APPROVE_USERS_FAILURE, err)
        reject(err)
      })
    })
  },

  activateUser({ commit }, data) {
    commit(APPROVE_USERS)
    return new Promise((resolve, reject) => {
      Api.User.activateUser(data).then( response => {
        commit(APPROVE_USERS_SUCCESS,response.data)
        resolve(response)
      }).catch(err => {
        commit(APPROVE_USERS_FAILURE, err)
        reject(err)
      })
    })
  },
  activity({ commit }, [payload,header]) {
    commit(ACTIVITY)
    return new Promise((resolve, reject) => {
      Api.User.activity(payload,header).then(response => {
        commit(ACTIVITY_SUCCESS, response.data)
        resolve(response)
      }).catch(err => {
        commit(ACTIVITY_SUCCESS, err)
        reject(err)
      })
    })
  },
  login({commit},payload) {
    commit(LOGIN)
    return new Promise((resolve, reject) => {
      Api.User.login(payload).then(response => {
        commit(LOGIN_SUCCESS, [response.data.token , response.data.user])
        resolve(response)
      }).catch(err => {
        commit(LOGIN_FAILURE, err)
        reject(err)
      })
    })
  },
  userById({ commit }, [payload,header]) {
    commit(USER_BY_ID)
    return new Promise((resolve, reject) => {
      Api.User.userById(payload, header).then(response => {
        commit(USER_BY_ID_SUCCESS, response.data)
        resolve(response)
      }).catch(err => {
        commit(USER_BY_ID_FAILURE, err)
        reject(err)
      })
    })
  },
  addUser ({commit}, [payload,header]) {
    commit(ADD_USER)
    return new Promise((resolve, reject) => {
      Api.User.register(payload,header).then(response => {
        commit(ADD_USER_SUCCESS, response.data)
        resolve(response)
      }).catch(err => {
        commit(ADD_USER_FAILURE, err)
        reject(err)
      })
    })
  },
  updateUser ({commit}, [payload,header]) {
    commit(UPDATE_USER)
    return new Promise((resolve, reject) => {
      Api.User.update(payload, header).then(response => {
        commit(UPDATE_USER_SUCCESS, response.data)
        resolve(response)
      }).catch(err => {
        commit(UPDATE_USER_FAILURE, err)
        reject(err)
      })
    })
  },
  removeUser ({commit}, [payload,header]) {
    commit(REMOVE_USER)
    return new Promise((resolve, reject) => {
      Api.User.deleteUser(payload,header).then(response => {
        commit(REMOVE_USER_SUCCESS, response.data)
        this.allUsers({ commit }, header)
        resolve(response)
      }).catch(err => {
        commit(REMOVE_USER_FAILURE, err)
        reject(err)
      })
    })
  },
  logout({ commit }, header){
    commit(LOGOUT)
    return new Promise((resolve, reject) => {
      Api.User.logout(header).then(response => {
        commit(LOGOUT_SUCCESS, response.data)
        resolve(response)
      }).catch(err => {
        commit(LOGOUT_FAILURE, err)
        reject(err)
      })
    })
  },

  nuxtServerInit({ commit }, { req }) {
    let token = '', user = {}
    if (req.headers.cookie) {
      const parsed = cookieparser.parse(req.headers.cookie)
      try {
        token = parsed.jwtToken
        user = JSON.parse(parsed.user)
      } catch (err) {
        // No valid cookie found
      }
    }

    commit(LOGIN_SUCCESS, [ token , user])

  }
}


