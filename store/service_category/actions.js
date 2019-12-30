import { Api } from '../../api'

import {
  ADD_QUESTION,
  ADD_QUESTION_SUCCESS,
  ADD_QUESTION_FAILURE,
  QUESTION_BY_ID,
  QUESTION_BY_ID_SUCCESS,
  QUESTION_BY_ID_FAILURE,
  UPDATE_QUESTION,
  UPDATE_QUESTION_SUCCESS,
  UPDATE_QUESTION_FAILURE,
  REMOVE_QUESTION,
  REMOVE_QUESTION_SUCCESS,
  REMOVE_QUESTION_FAILURE,
  ALL_QUESTIONS,
  ALL_QUESTIONS_SUCCESS,
  ALL_QUESTIONS_FAILURE
} from './mutation-types'

export const actions = {
  allQuestions({ commit }, header) {
    commit(ALL_QUESTIONS)
    return new Promise((resolve, reject) => {
      Api.Question.allQuestions(header).then( response => {
        commit(ALL_QUESTIONS_SUCCESS,response.data)
        resolve(response)
      }).catch(err => {
        commit(ALL_QUESTIONS_FAILURE, err)
        reject(err)
      })
    })
  },

  questionById({ commit }, [payload,header]) {
    commit(QUESTION_BY_ID)
    return new Promise((resolve, reject) => {
      Api.Question.questionById(payload, header).then(response => {
        commit(QUESTION_BY_ID_SUCCESS, response.data)
        resolve(response)
      }).catch(err => {
        commit(QUESTION_BY_ID_FAILURE, err)
        reject(err)
      })
    })    
  },

  addQuestion ({commit}, [payload,header]) {
    commit(ADD_QUESTION)
    return new Promise((resolve, reject) => {
      Api.Question.addQuestion(payload,header).then(response => {
        commit(ADD_QUESTION_SUCCESS, response.data)
        resolve(response)      
      }).catch(err => {
        commit(ADD_QUESTION_FAILURE, err)
        reject(err)
      })
    })
  },

  updateQuestion ({commit}, [payload,header]) {
    commit(UPDATE_QUESTION)
    return new Promise((resolve, reject) => {
      Api.Question.updateQuestion(payload, header).then(response => {
        commit(UPDATE_QUESTION_SUCCESS, response.data)
        resolve(response)
      }).catch(err => {
        commit(UPDATE_QUESTION_FAILURE, err)
        reject(err)
      })  
    })  
  },

  deleteQuestion ({commit}, [payload,header]) {
    commit(REMOVE_QUESTION)
    return new Promise((resolve, reject) => {
      Api.Question.deleteQuestion(payload,header).then(response => {
        commit(REMOVE_QUESTION_SUCCESS, response.data)
        resolve(response)
      }).catch(err => {
        commit(REMOVE_QUESTION_FAILURE, err)
        reject(err)
      })  
    })
  }
}


