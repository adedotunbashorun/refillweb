import axios from 'axios'
import {config} from '../../config'

const allCompanies = (header) => {
    return new Promise((resolve, reject) => {
        axios.get(config.apiUrl + '/api/companies', { headers: { Authorization: header } })
            .then(resp => {
                resolve(resp)
            })
            .catch(err => {
                reject(err)
            })
    })
}

const allApprovedCompanies = (header) => {
  return new Promise((resolve, reject) => {
      axios.get(config.apiUrl + '/api/companies/approved', { headers: { Authorization: header } })
          .then(resp => {
              resolve(resp)
          })
          .catch(err => {
              reject(err)
          })
  })
}

const approveCompany = (data,header) => {
  return new Promise((resolve, reject) => {
      axios.patch(config.apiUrl + '/api/company/approve/'+ data, { headers: { Authorization: header } })
          .then(resp => {
              resolve(resp)
          })
          .catch(err => {
              reject(err)
          })
  })
}

const companyById = (data, header) => {
    return new Promise((resolve, reject) => {
        axios.get(config.apiUrl + '/api/company/'+data, {headers:{ Authorization: header}})
            .then(resp => {
                resolve(resp)
            })
            .catch(err => {
                reject(err)
            })
    })
}

const getUserCompanies = (data, header) => {
  return new Promise((resolve, reject) => {
      axios.get(config.apiUrl + '/api/companies/'+data, {headers:{ Authorization: header}})
          .then(resp => {
              resolve(resp)
          })
          .catch(err => {
              reject(err)
          })
  })
}

const getComapanyRiders = (data,header) => {
  return new Promise((resolve, reject) => {
      axios.get(config.apiUrl + '/api/riders/'+data, {headers:{ Authorization: header}})
          .then(resp => {
              resolve(resp)
          })
          .catch(err => {
              reject(err)
          })
  })
}

const create = (data, header) => {
    return new Promise((resolve, reject) => {
        axios.post(config.apiUrl + '/api/company/create', data)
            .then(resp => {
                resolve(resp)
            })
            .catch(err => {
                reject(err)
            })
    })
}

const update = (data, header) => {
    return new Promise((resolve, reject) => {
        axios.patch(config.apiUrl + '/api/company/update/' + data._id, data, { headers: { Authorization: header } })
            .then(resp => {
                resolve(resp)
            })
            .catch(err => {
                reject(err)
            })
    })
}

export const Company = {
    create,
    approveCompany,
    companyById,
    update,
    allCompanies,
    allApprovedCompanies,
    getUserCompanies,
    getComapanyRiders
}
