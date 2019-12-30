import axios from 'axios'
import {config} from '../../config'

const allCategory = (header) => {
    return new Promise((resolve, reject) => {
        axios.get(config.apiUrl + '/api/categories', { headers: { Authorization: header } })
            .then(resp => {
                resolve(resp)
            })
            .catch(err => {
                reject(err)
            })
    })
}

const allCategoryQuestions = (data,header) => {
    return new Promise((resolve, reject) => {
        axios.get(config.apiUrl + '/api/subcategories/'+data, { headers: { Authorization: header } })
            .then(resp => {
                resolve(resp)
            })
            .catch(err => {
                reject(err)
            })
    })
}

const categoryById = (data, header) => {
    return new Promise((resolve, reject) => {
        axios.get(config.apiUrl + '/api/category/'+data, {headers:{ Authorization: header}})
            .then(resp => {
                resolve(resp)
            })
            .catch(err => {
                reject(err)
            })
    })
}

const addCategory = (data, header) => {
    return new Promise((resolve, reject) => {
        axios.post(config.apiUrl + '/api/category', data, { headers: { Authorization: header } })
            .then(resp => {
                resolve(resp)
            })
            .catch(err => {
                reject(err)
            })
    })
}

const updateCategory = (data, header) => {
    return new Promise((resolve, reject) => {
        axios.patch(config.apiUrl + '/api/category/' + data._id, data, { headers: { Authorization: header } })
            .then(resp => {
                resolve(resp)
            })
            .catch(err => {
                reject(err)
            })
    })
}

const deleteCategory = (data, header) => {
    return new Promise((resolve, reject) => {
        axios.delete(config.apiUrl + '/api/category/' + data, { headers: { Authorization: header } })
            .then(resp => {
                resolve(resp)
            })
            .catch(err => {
                reject(err)
            })
    })
}

export const Category = {
    allCategory,
    categoryById,
    deleteCategory,
    addCategory,
    updateCategory,
    allCategoryQuestions
}
