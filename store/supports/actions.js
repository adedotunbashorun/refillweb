import { Api } from '../../api'

import {
  ADD_SUPPORT,
  ADD_SUPPORT_SUCCESS,
  ADD_SUPPORT_FAILURE,
  SUPPORT_BY_ID,
  SUPPORT_BY_ID_SUCCESS,
  SUPPORT_BY_ID_FAILURE,
  UPDATE_SUPPORT,
  UPDATE_SUPPORT_SUCCESS,
  UPDATE_SUPPORT_FAILURE,
  ALL_SUPPORT,
  ALL_SUPPORT_SUCCESS,
  ALL_SUPPORT_FAILURE,
  ALL_PRIORITIES,
  ALL_PRIORITIES_SUCCESS,
  ALL_PRIORITIES_FAILURE
} from './mutation-types'

export const actions = {
  allSupports({ commit }, [type,id,header]) {
    commit(ALL_SUPPORT)
    return new Promise((resolve, reject) => {
      Api.Supports.allSupports(type, id, header).then( response => {
        commit(ALL_SUPPORT_SUCCESS,response.data)
        resolve(response)
      }).catch(err => {
        commit(ALL_SUPPORT_FAILURE, err)
        reject(err)
      })
    })
  },

  allPriorities({ commit }, header) {
    commit(ALL_PRIORITIES)
    return new Promise((resolve, reject) => {
      Api.Supports.allPriorities(header).then( response => {
        commit(ALL_PRIORITIES_SUCCESS,response.data)
        resolve(response)
      }).catch(err => {
        commit(ALL_PRIORITIES_FAILURE, err)
        reject(err)
      })
    })
  },

  supportById({ commit }, [payload,header]) {
    commit(SUPPORT_BY_ID)
    return new Promise((resolve, reject) => {
      Api.Supports.supportById(payload, header).then(response => {
        commit(SUPPORT_BY_ID_SUCCESS, response.data)
        resolve(response)
      }).catch(err => {
        commit(SUPPORT_BY_ID_FAILURE, err)
        reject(err)
      })
    })
  },

  addSupport ({commit}, [payload,header]) {
    commit(ADD_SUPPORT)
    return new Promise((resolve, reject) => {
      Api.Supports.addSupport(payload,header).then(response => {
        commit(ADD_SUPPORT_SUCCESS, response.data)
        resolve(response)
      }).catch(err => {
        commit(ADD_SUPPORT_FAILURE, err)
        reject(err)
      })
    })
  },

  addSupportReply ({commit}, [payload,header]) {
    // commit(ADD_SUPPORT)
    return new Promise((resolve, reject) => {
      Api.Supports.addSupportReply(payload,header).then(response => {
        // commit(ADD_SUPPORT_SUCCESS, response.data)
        resolve(response)
      }).catch(err => {
        // commit(ADD_SUPPORT_FAILURE, err)
        reject(err)
      })
    })
  },


  updateSupport ({commit}, [payload,status,header]) {
    commit(UPDATE_SUPPORT)
    return new Promise((resolve, reject) => {
      Api.Supports.updateSupport(payload,status, header).then(response => {
        commit(UPDATE_SUPPORT_SUCCESS, response.data)
        resolve(response)
      }).catch(err => {
        commit(UPDATE_SUPPORT_FAILURE, err)
        reject(err)
      })
    })
  },

  supportReplies ({commit}, [payload,header]) {
    // commit(UPDATE_SUPPORT)
    return new Promise((resolve, reject) => {
      Api.Supports.supportReplies(payload, header).then(response => {
        // commit(UPDATE_SUPPORT_SUCCESS, response.data)
        resolve(response)
      }).catch(err => {
        // commit(UPDATE_SUPPORT_FAILURE, err)
        reject(err)
      })
    })
  },


}


