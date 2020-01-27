import { Api } from '../../api'

import {
  PAYMENT_BY_ID,
  PAYMENT_BY_ID_SUCCESS,
  PAYMENT_BY_ID_FAILURE,
  ALL_PAYMENT,
  ALL_PAYMENT_SUCCESS,
  ALL_PAYMENT_FAILURE
} from './mutation-types'

export const actions = {
  allPayments({ commit }, header) {
    commit(ALL_PAYMENT)
    return new Promise((resolve, reject) => {
      Api.Payment.allPayments(header).then( response => {
        commit(ALL_PAYMENT_SUCCESS,response.data)
        resolve(response)
      }).catch(err => {
        commit(ALL_PAYMENT_FAILURE, err)
        reject(err)
      })
    })
  },

  paymentById({ commit }, [payload,header]) {
    commit(PAYMENT_BY_ID)
    return new Promise((resolve, reject) => {
      Api.Payment.paymentById(payload, header).then(response => {
        commit(PAYMENT_BY_ID_SUCCESS, response.data)
        resolve(response)
      }).catch(err => {
        commit(PAYMENT_BY_ID_FAILURE, err)
        reject(err)
      })
    })
  },
}
