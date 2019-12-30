import axios from 'axios'
import {config} from '../../config'

const allSubCategories = (header) => {
    return new Promise((resolve, reject) => {
        axios.get(config.apiUrl + '/api/subcategories', { headers: { Authorization: header } })
            .then(resp => {
                resolve(resp)
            })
            .catch(err => {
                reject(err)
            })
    })
}

const SubCategoryById = (data, header) => {
    return new Promise((resolve, reject) => {
        axios.get(config.apiUrl + '/api/subcategory/'+data, {headers:{ Authorization: header}})
            .then(resp => {
                resolve(resp)
            })
            .catch(err => {
                reject(err)
            })
    })
}

const addSubCategory = (data, header) => {
    return new Promise((resolve, reject) => {
        axios.post(config.apiUrl + '/api/subcategory', data, { headers: { Authorization: header } })
            .then(resp => {
                resolve(resp)
            })
            .catch(err => {
                reject(err)
            })
    })
}

const updateSubCategory = (data, header) => {
    return new Promise((resolve, reject) => {
        axios.patch(config.apiUrl + '/api/subcategory/' + data._id, data, { headers: { Authorization: header } })
            .then(resp => {
                resolve(resp)
            })
            .catch(err => {
                reject(err)
            })
    })
}

const deleteSubCategory = (data, header) => {
    return new Promise((resolve, reject) => {
        axios.delete(config.apiUrl + '/api/subcategory/' + data, { headers: { Authorization: header } })
            .then(resp => {
                resolve(resp)
            })
            .catch(err => {
                reject(err)
            })
    })
}

export const SubCategory = {
    allSubCategories,
    SubCategoryById,
    addSubCategory,
    deleteSubCategory,
    updateSubCategory
}
