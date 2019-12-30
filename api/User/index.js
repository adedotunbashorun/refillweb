import axios from 'axios'
import {config} from '../../config'


const login = (data) => {
    return new Promise((resolve, reject) => {
        axios.post(config.apiUrl + '/api/login', data)
            .then(resp => {
                resolve(resp)
            })
            .catch(err => {
                reject(err)
            })
    })
}

const allUser = (header) => {
    return new Promise((resolve, reject) => {
        axios.get(config.apiUrl + '/api/users', { headers: { Authorization: header } })
            .then(resp => {
                resolve(resp)
            })
            .catch(err => {
                reject(err)
            })
    })
}

const approveUser = (data,header) => {
  return new Promise((resolve, reject) => {
      axios.get(config.apiUrl + '/api/user/set_approval_status/'+ data, { headers: { Authorization: header } })
          .then(resp => {
              resolve(resp)
          })
          .catch(err => {
              reject(err)
          })
  })
}

const activateUser = (data) => {
  return new Promise((resolve, reject) => {
      axios.patch(config.apiUrl + '/api/activates/'+ data)
          .then(resp => {
              resolve(resp)
          })
          .catch(err => {
              reject(err)
          })
  })
}

const userById = (data, header) => {
    return new Promise((resolve, reject) => {
        axios.get(config.apiUrl + '/api/user/'+data, {headers:{ Authorization: header}})
            .then(resp => {
                resolve(resp)
            })
            .catch(err => {
                reject(err)
            })
    })
}

const getUserCompany = (data, header) => {
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

const getUnassignRider = (header) => {
  return new Promise((resolve, reject) => {
      axios.get(config.apiUrl + '/api/unassigned/riders', {headers:{ Authorization: header}})
          .then(resp => {
              resolve(resp)
          })
          .catch(err => {
              reject(err)
          })
  })
}

const forgetPassword = (data) => {
    return new Promise((resolve, reject) => {
        axios.post(config.apiUrl + '/api/forget_password', data)
            .then(resp => {
                resolve(resp)
            })
            .catch(err => {
                reject(err)
            })
    })
}

const register = (data, header) => {
    return new Promise((resolve, reject) => {
        axios.post(config.apiUrl + '/api/register', data)
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
        axios.patch(config.apiUrl + '/api/user/update/' + data._id, data, { headers: { Authorization: header } })
            .then(resp => {
                resolve(resp)
            })
            .catch(err => {
                reject(err)
            })
    })
}

const assignCompanyRider = (data, header) => {
  return new Promise((resolve, reject) => {
      axios.post(config.apiUrl + '/api/add_rider', data, { headers: { Authorization: header } })
          .then(resp => {
              resolve(resp)
          })
          .catch(err => {
              reject(err)
          })
  })
}

const activity = (data,header) => {
    return new Promise((resolve, reject) => {
        axios.get(config.apiUrl + '/api/my_activities/' + data, { headers: { Authorization: header } })
            .then(resp => {
                resolve(resp)
            })
            .catch(err => {
                reject(err)
            })
    })
}

const logout = (header)  => {
    return new Promise((resolve, reject) => {
        axios.get(config.apiUrl + '/api/logout', { headers: { Authorization: header } }).then(resp => {
            // delete axios.defaults.headers.common['Authorization']
            resolve(resp)
        }).catch(err => {
            reject(err)
        })
    })
}

const deleteUser = (data, header) => {
    return new Promise((resolve, reject) => {
        axios.delete(config.apiUrl + '/api/user/' + data, { headers: { Authorization: header } })
            .then(resp => {
                resolve(resp)
            })
            .catch(err => {
                reject(err)
            })
    })
}

export const User = {
    login,
    register,
    update,
    forgetPassword,
    activity,
    approveUser,
    activateUser,
    logout,
    allUser,
    userById,
    deleteUser,
    getUnassignRider,
    getUserCompany,
    assignCompanyRider
}
