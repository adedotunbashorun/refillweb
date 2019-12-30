import { Api } from '../../api'

import {
  ADD_CLASS,
  ADD_CLASS_SUCCESS,
  ADD_CLASS_FAILURE,
  CLASS_BY_ID,
  CLASS_BY_ID_SUCCESS,
  CLASS_BY_ID_FAILURE,
  UPDATE_CLASS,
  UPDATE_CLASS_SUCCESS,
  UPDATE_CLASS_FAILURE,
  REMOVE_CLASS,
  REMOVE_CLASS_SUCCESS,
  REMOVE_CLASS_FAILURE,
  ALL_CLASS,
  ALL_CLASS_SUCCESS,
  ALL_CLASS_FAILURE
} from './mutation-types'

export const actions = {
  allClass({ commit }, header) {
    commit(ALL_CLASS)
    return new Promise((resolve, reject) => {
      Api.Class.allClass(header).then( response => {
        commit(ALL_CLASS_SUCCESS,response.data)
        resolve(response)
      }).catch(err => {
        commit(ALL_CLASS_FAILURE, err)
        reject(err)
      })
    })
  },

  classById({ commit }, [payload,header]) {
    commit(CLASS_BY_ID)
    return new Promise((resolve, reject) => {
      Api.Class.classById(payload, header).then(response => {
        commit(CLASS_BY_ID_SUCCESS, response.data)
        resolve(response)
      }).catch(err => {
        commit(CLASS_BY_ID_FAILURE, err)
        reject(err)
      })
    })
  },

  addClass ({commit}, [payload,header]) {
    commit(ADD_CLASS)
    return new Promise((resolve, reject) => {
      Api.Class.addClass(payload,header).then(response => {
        commit(ADD_CLASS_SUCCESS, response.data)
        resolve(response)
      }).catch(err => {
        commit(ADD_CLASS_FAILURE, err)
        reject(err)
      })
    })
  },

  updateClass ({commit}, [payload,header]) {
    commit(UPDATE_CLASS)
    return new Promise((resolve, reject) => {
      Api.Class.updateClass(payload, header).then(response => {
        commit(UPDATE_CLASS_SUCCESS, response.data)
        resolve(response)
      }).catch(err => {
        commit(UPDATE_CLASS_FAILURE, err)
        reject(err)
      })
    })
  },

  removeClass ({commit}, [payload,header]) {
    commit(REMOVE_CLASS)
    return new Promise((resolve, reject) => {
      Api.Class.deleteClass(payload,header).then(response => {
        commit(REMOVE_CLASS_SUCCESS, response.data)
        resolve(response)
      }).catch(err => {
        commit(REMOVE_CLASS_FAILURE, err)
        reject(err)
      })
    })
  }
}


