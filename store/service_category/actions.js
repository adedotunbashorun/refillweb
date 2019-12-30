import { Api } from "../../api";

import {
  ADD_SUBCATEGORY,
  ADD_SUBCATEGORY_SUCCESS,
  ADD_SUBCATEGORY_FAILURE,
  SUBCATEGORY_BY_ID,
  SUBCATEGORY_BY_ID_SUCCESS,
  SUBCATEGORY_BY_ID_FAILURE,
  UPDATE_SUBCATEGORY,
  UPDATE_SUBCATEGORY_SUCCESS,
  UPDATE_SUBCATEGORY_FAILURE,
  REMOVE_SUBCATEGORY,
  REMOVE_SUBCATEGORY_SUCCESS,
  REMOVE_SUBCATEGORY_FAILURE,
  ALL_SUBCATEGORIES,
  ALL_SUBCATEGORIES_SUCCESS,
  ALL_SUBCATEGORIES_FAILURE
} from "./mutation-types";

export const actions = {
  allSubCategories({ commit }, header) {
    commit(ALL_SUBCATEGORIES);
    return new Promise((resolve, reject) => {
      Api.SubCategory.allSubCategories(header)
        .then(response => {
          commit(ALL_SUBCATEGORIES_SUCCESS, response.data);
          resolve(response);
        })
        .catch(err => {
          commit(ALL_SUBCATEGORIES_FAILURE, err);
          reject(err);
        });
    });
  },

  subCategoryById({ commit }, [payload, header]) {
    commit(SUBCATEGORY_BY_ID);
    return new Promise((resolve, reject) => {
      Api.SubCategory.SubCategoryById(payload, header)
        .then(response => {
          commit(SUBCATEGORY_BY_ID_SUCCESS, response.data);
          resolve(response);
        })
        .catch(err => {
          commit(SUBCATEGORY_BY_ID_FAILURE, err);
          reject(err);
        });
    });
  },

  addSubCategory({ commit }, [payload, header]) {
    commit(ADD_SUBCATEGORY);
    return new Promise((resolve, reject) => {
      Api.SubCategory.addSubCategory(payload, header)
        .then(response => {
          commit(ADD_SUBCATEGORY_SUCCESS, response.data);
          resolve(response);
        })
        .catch(err => {
          commit(ADD_SUBCATEGORY_FAILURE, err);
          reject(err);
        });
    });
  },

  updateSubCategory({ commit }, [payload, header]) {
    commit(UPDATE_SUBCATEGORY);
    return new Promise((resolve, reject) => {
      Api.SubCategory.updateSubCategory(payload, header)
        .then(response => {
          commit(UPDATE_SUBCATEGORY_SUCCESS, response.data);
          resolve(response);
        })
        .catch(err => {
          commit(UPDATE_SUBCATEGORY_FAILURE, err);
          reject(err);
        });
    });
  },

  deleteSubCategory({ commit }, [payload, header]) {
    commit(REMOVE_SUBCATEGORY);
    return new Promise((resolve, reject) => {
      Api.SubCategory.deleteSubCategory(payload, header)
        .then(response => {
          commit(REMOVE_SUBCATEGORY_SUCCESS, response.data);
          resolve(response);
        })
        .catch(err => {
          commit(REMOVE_SUBCATEGORY_FAILURE, err);
          reject(err);
        });
    });
  }
};
