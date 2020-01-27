import { Api } from '../../api'

import {
  ADD_COMPANY,
  ADD_COMPANY_SUCCESS,
  ADD_COMPANY_FAILURE,
  COMPANY_BY_ID,
  COMPANY_BY_ID_SUCCESS,
  COMPANY_BY_ID_FAILURE,
  UPDATE_COMPANY,
  UPDATE_COMPANY_SUCCESS,
  UPDATE_COMPANY_FAILURE,
  REMOVE_COMPANY,
  REMOVE_COMPANY_SUCCESS,
  REMOVE_COMPANY_FAILURE,
  ALL_COMPANY,
  ALL_COMPANY_SUCCESS,
  ALL_COMPANY_FAILURE
} from './mutation-types'

export const actions = {
  allCompanies({ commit }, header) {
    commit(ALL_COMPANY)
    return new Promise((resolve, reject) => {
      Api.Company.allCompanies(header).then( response => {
        commit(ALL_COMPANY_SUCCESS,response.data)
        resolve(response)
      }).catch(err => {
        commit(ALL_COMPANY_FAILURE, err)
        reject(err)
      })
    })
  },

  companyById({ commit }, [payload,header]) {
    commit(COMPANY_BY_ID)
    return new Promise((resolve, reject) => {
      Api.Company.companyById(payload, header).then(response => {
        commit(COMPANY_BY_ID_SUCCESS, response.data)
        resolve(response)
      }).catch(err => {
        commit(COMPANY_BY_ID_FAILURE, err)
        reject(err)
      })
    })
  },

  approveCompany({ commit }, [payload,header]) {
    return new Promise((resolve, reject) => {
      Api.Company.approveCompany(payload, header).then(response => {
        resolve(response)
      }).catch(err => {
        reject(err)
      })
    })
  },

  addCompany ({commit}, [payload,header]) {
    commit(ADD_COMPANY)
    return new Promise((resolve, reject) => {
      Api.Company.create(payload,header).then(response => {
        commit(ADD_COMPANY_SUCCESS, response.data)
        resolve(response)
      }).catch(err => {
        commit(ADD_COMPANY_FAILURE, err)
        reject(err)
      })
    })
  },

  updateCompany ({commit}, [payload,header]) {
    commit(UPDATE_COMPANY)
    return new Promise((resolve, reject) => {
      Api.Company.update(payload, header).then(response => {
        commit(UPDATE_COMPANY_SUCCESS, response.data)
        resolve(response)
      }).catch(err => {
        commit(UPDATE_COMPANY_FAILURE, err)
        reject(err)
      })
    })
  },
}


