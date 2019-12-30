import { Api } from '../../api'

import {
  ADD_SETTINGS,
  ADD_SETTINGS_SUCCESS,
  ADD_SETTINGS_FAILURE,
  SETTINGS_BY_ID,
  SETTINGS_BY_ID_SUCCESS,
  SETTINGS_BY_ID_FAILURE,
  UPDATE_SETTINGS,
  UPDATE_SETTINGS_SUCCESS,
  UPDATE_SETTINGS_FAILURE,
  ALL_SETTINGS,
  ALL_SETTINGS_SUCCESS,
  ALL_SETTINGS_FAILURE
} from './mutation-types'

export const actions = {
  allSettings({ commit }, header) {
    commit(ALL_SETTINGS)
    return new Promise((resolve, reject) => {
      Api.Settings.allSettings(header).then( response => {
        commit(ALL_SETTINGS_SUCCESS,response.data)
        resolve(response)
      }).catch(err => {
        commit(ALL_SETTINGS_FAILURE, err)
        reject(err)
      })
    })
  },

  allNotifications({ commit }, header) {
    // commit(ALL_SETTINGS)
    return new Promise((resolve, reject) => {
      Api.Settings.allNotifications(header).then( response => {
        // commit(ALL_SETTINGS_SUCCESS,response.data)
        resolve(response)
      }).catch(err => {
        // commit(ALL_SETTINGS_FAILURE, err)
        reject(err)
      })
    })
  },

  settingsById({ commit }, [payload,header]) {
    commit(SETTINGS_BY_ID)
    return new Promise((resolve, reject) => {
      Api.Settings.settingsById(payload, header).then(response => {
        commit(SETTINGS_BY_ID_SUCCESS, response.data)
        resolve(response)
      }).catch(err => {
        commit(SETTINGS_BY_ID_FAILURE, err)
        reject(err)
      })
    })
  },

  markAsRead({ commit }, [payload,header]) {
    // commit(SETTINGS_BY_ID)
    return new Promise((resolve, reject) => {
      Api.Settings.markAsRead(payload, header).then(response => {
        // commit(SETTINGS_BY_ID_SUCCESS, response.data)
        resolve(response)
      }).catch(err => {
        // commit(SETTINGS_BY_ID_FAILURE, err)
        reject(err)
      })
    })
  },

  addSettings ({commit}, [payload,header]) {
    commit(ADD_SETTINGS)
    return new Promise((resolve, reject) => {
      Api.Settings.addSettings(payload,header).then(response => {
        commit(ADD_SETTINGS_SUCCESS, response.data)
        resolve(response)
      }).catch(err => {
        commit(ADD_SETTINGS_FAILURE, err)
        reject(err)
      })
    })
  },

  updateSettings ({commit}, [payload,header]) {
    commit(UPDATE_SETTINGS)
    return new Promise((resolve, reject) => {
      Api.Settings.updateSettings(payload, header).then(response => {
        commit(UPDATE_SETTINGS_SUCCESS, response.data)
        resolve(response)
      }).catch(err => {
        commit(UPDATE_SETTINGS_FAILURE, err)
        reject(err)
      })
    })
  },


}


