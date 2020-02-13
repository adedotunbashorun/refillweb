import { Api } from '../../api'
import {
  CONTACT_BY_ID,
  CONTACT_BY_ID_SUCCESS,
  REMOVE_CONTACT,
  REMOVE_CONTACT_SUCCESS,
  REMOVE_CONTACT_FAILURE,
  ALL_CONTACT,
  ALL_CONTACT_SUCCESS,
  MESSAGE_BY_ID,
  MESSAGE_BY_ID_SUCCESS,
  MESSAGE_BY_ID_FAILURE,
  ALL_MESSAGE,
  ALL_MESSAGE_SUCCESS,
  ALL_MESSAGE_FAILURES,
  ERROR_MSG,
  CONTACT_BY_ID_FAILURE,
  ALL_CONTACT_FAILURE,
} from './mutation-types'

export const actions = {
  allContact({ commit }, header) {
    commit(ALL_CONTACT)
    return new Promise((resolve, reject) => {
      Api.Contact.allContact(header).then( response => {
        commit(ALL_CONTACT_SUCCESS,response.data)
        resolve(response)
      }).catch(err => {
        commit(ALL_CONTACT_FAILURES, err)
        reject(err)
      })
    })
  },

  allMessages({ commit }, header) {
    commit(ALL_MESSAGE)
    return new Promise((resolve, reject) => {
      Api.Contact.allMessages(header).then( response => {
        commit(ALL_MESSAGE_SUCCESS,response.data)
        resolve(response)
      }).catch(err => {
        commit(ALL_MESSAGE_FAILURES, err)
        reject(err)
      })
    })
  },

  createMessage({ commit }, [payload, header]) {
    // commit(CREATE_MESSAGE)
    return new Promise((resolve, reject) => {
      Api.Contact.createMessage(payload, header).then( response => {
        // commit(CREATE_MESSAGE_SUCCESS,response.data)
        resolve(response)
      }).catch(err => {
        // commit(CREATE_MESSAGE_FAILURES, err)
        reject(err)
      })
    })
  },

  contactById({ commit }, [payload,header]) {
    commit(CONTACT_BY_ID)
    return new Promise((resolve, reject) => {
      Api.Contact.contactById(payload, header).then(response => {
        commit(CONTACT_BY_ID_SUCCESS, response.data)
        resolve(response)
      }).catch(err => {
        commit(CONTACT_BY_ID_FAILURE, err)
        reject(err)
      })
    })
  },

  messageById({ commit }, [payload,header]) {
    commit(MESSAGE_BY_ID)
    return new Promise((resolve, reject) => {
      Api.Contact.messageById(payload, header).then(response => {
        commit(MESSAGE_BY_ID_SUCCESS, response.data)
        resolve(response)
      }).catch(err => {
        commit(MESSAGE_BY_ID_FAILURE, err)
        reject(err)
      })
    })
  },

  replyContact({ commit }, [payload,header]) {
    return new Promise((resolve, reject) => {
      Api.Contact.replyContact(payload, header).then(response => {
        resolve(response)
      }).catch(err => {
        reject(err)
      })
    })
  },

  removeContact ({commit}, [payload,header]) {
    commit(REMOVE_CONTACT)
    return new Promise((resolve, reject) => {
      Api.Contact.deletecontact(payload,header).then(response => {
        commit(REMOVE_CONTACT_SUCCESS, response.data)
        resolve(response)
      }).catch(err => {
        commit(REMOVE_CONTACT_FAILURE, err)
        reject(err)
      })
    })
  }
}


