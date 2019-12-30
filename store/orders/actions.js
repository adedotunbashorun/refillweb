import { Api } from "../../api";

import {
  ADD_ORDER,
  ADD_ORDER_SUCCESS,
  ADD_ORDER_FAILURE,
  ORDER_BY_ID,
  ORDER_BY_ID_SUCCESS,
  ORDER_BY_ID_FAILURE,
  UPDATE_ORDER,
  UPDATE_ORDER_SUCCESS,
  UPDATE_ORDER_FAILURE,
  REMOVE_ORDER,
  REMOVE_ORDER_SUCCESS,
  REMOVE_ORDER_FAILURE,
  ALL_ORDER,
  ALL_ORDER_SUCCESS,
  ALL_ORDER_FAILURE
} from "./mutation-types";

export const actions = {
  allOrders({ commit }, header) {
    commit(ALL_ORDER);
    return new Promise((resolve, reject) => {
      Api.Order.allOrders(header)
        .then(response => {
          commit(ALL_ORDER_SUCCESS, response.data);
          resolve(response);
        })
        .catch(err => {
          commit(ALL_ORDER_FAILURE, err);
          reject(err);
        });
    });
  },

  orderById({ commit }, [payload, header]) {
    commit(ORDER_BY_ID);
    return new Promise((resolve, reject) => {
      Api.Order.orderById(payload, header)
        .then(response => {
          commit(ORDER_BY_ID_SUCCESS, response.data);
          resolve(response);
        })
        .catch(err => {
          commit(ORDER_BY_ID_FAILURE, err);
          reject(err);
        });
    });
  },

  orderByStatusType({ commit }, [payload, header]) {
    commit(ALL_ORDER);
    return new Promise((resolve, reject) => {
      Api.Order.orderByStatusType(payload, header)
        .then(response => {
          commit(ALL_ORDER_SUCCESS, response.data);
          resolve(response);
        })
        .catch(err => {
          commit(ALL_ORDER_FAILURE, err);
          reject(err);
        });
    });
  }
};
