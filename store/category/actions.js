import { Api } from '../../api'

import {
  ADD_CATEGORY,
  ADD_CATEGORY_SUCCESS,
  ADD_CATEGORY_FAILURE,
  CATEGORY_BY_ID,
  CATEGORY_BY_ID_SUCCESS,
  CATEGORY_BY_ID_FAILURE,
  UPDATE_CATEGORY,
  UPDATE_CATEGORY_SUCCESS,
  UPDATE_CATEGORY_FAILURE,
  REMOVE_CATEGORY,
  REMOVE_CATEGORY_SUCCESS,
  REMOVE_CATEGORY_FAILURE,
  ALL_CATEGORYS,
  ALL_CATEGORYS_SUCCESS,
  ALL_CATEGORYS_FAILURE,
  ALL_CATEGORYS_QUESTION_FAILURE,
  ALL_CATEGORYS_QUESTION_SUCCESS,
  ALL_CATEGORYS_QUESTION
} from './mutation-types'

export const actions = {
  allCategories({ commit }, header) {
    commit(ALL_CATEGORYS)
    return new Promise((resolve, reject) => {
      Api.Category.allCategory(header).then( response => {
        commit(ALL_CATEGORYS_SUCCESS,response.data)
        resolve(response)
      }).catch(err => {
        commit(ALL_CATEGORYS_FAILURE, err)
        reject(err)
      })
    })
  },

  allCategoryQuestions({ commit }, [payload,header]) {
    commit(ALL_CATEGORYS_QUESTION)
    return new Promise((resolve, reject) => {
      Api.Category.allCategoryQuestions(payload,header).then(response => {
        commit(ALL_CATEGORYS_QUESTION_SUCCESS, response.data)
        resolve(response)
      }).catch(err => {
        commit(ALL_CATEGORYS_QUESTION_FAILURE, err)
        reject(err)
      })
    })
  },

  categoryById({ commit }, [payload,header]) {
    commit(CATEGORY_BY_ID)
    return new Promise((resolve, reject) => {
      Api.Category.categoryById(payload, header).then(response => {
        commit(CATEGORY_BY_ID_SUCCESS, response.data)
        resolve(response)
      }).catch(err => {
        commit(CATEGORY_BY_ID_FAILURE, err)
        reject(err)
      })
    })    
  },

  addCategory ({commit}, [payload,header]) {
    commit(ADD_CATEGORY)
    return new Promise((resolve, reject) => {
      Api.Category.addCategory(payload,header).then(response => {
        commit(ADD_CATEGORY_SUCCESS, response.data)
        resolve(response)      
      }).catch(err => {
        commit(ADD_CATEGORY_FAILURE, err)
        reject(err)
      })
    })
  },

  updateCategory ({commit}, [payload,header]) {
    commit(UPDATE_CATEGORY)
    return new Promise((resolve, reject) => {
      Api.Category.updateCategory(payload, header).then(response => {
        commit(UPDATE_CATEGORY_SUCCESS, response.data)
        resolve(response)
      }).catch(err => {
        commit(UPDATE_CATEGORY_FAILURE, err)
        reject(err)
      })  
    })  
  },

  removeCategory ({commit}, [payload,header]) {
    commit(REMOVE_CATEGORY)
    return new Promise((resolve, reject) => {
      Api.Category.deleteCategory(payload,header).then(response => {
        commit(REMOVE_CATEGORY_SUCCESS, response.data)
        resolve(response)
      }).catch(err => {
        commit(REMOVE_CATEGORY_FAILURE, err)
        reject(err)
      })  
    })
  }
}


