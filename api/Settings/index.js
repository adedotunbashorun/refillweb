import axios from 'axios'
import {config} from '../../config'

const allSettings = (header) => {
  return new Promise((resolve, reject) => {
    axios.get(config.apiUrl +'/api/settings',{headers:{ Authorization: header}})
    .then(resp => {
        resolve(resp)
    })
    .catch(err => {
        reject(err)
    })
  })
}

const allNotifications = (header) => {
  return new Promise((resolve, reject) => {
    axios.get(config.apiUrl +'/api/notifications',{headers:{ Authorization: header}})
    .then(resp => {
        resolve(resp)
    })
    .catch(err => {
        reject(err)
    })
  })
}


const settingsById = (data, header) => {
    return new Promise((resolve, reject) => {
        axios.get(config.apiUrl + '/api/settings/'+data, {headers:{ Authorization: header}})
            .then(resp => {
                resolve(resp)
            })
            .catch(err => {
                reject(err)
            })
    })
}

const markAsRead = (data, header) => {
  return new Promise((resolve, reject) => {
      axios.get(config.apiUrl + '/api/markasread/'+data, {headers:{ Authorization: header}})
          .then(resp => {
              resolve(resp)
          })
          .catch(err => {
              reject(err)
          })
  })
}

const addSettings = (data, header) => {
    return new Promise((resolve, reject) => {
        axios.post(config.apiUrl + '/api/settings', data, { headers: { Authorization: header } })
            .then(resp => {
                resolve(resp)
            })
            .catch(err => {
                reject(err)
            })
    })
}

const updateSettings = (data, header) => {
    return new Promise((resolve, reject) => {
        axios.patch(config.apiUrl + '/api/settings/' + data._id, data, { headers: { Authorization: header } })
            .then(resp => {
                resolve(resp)
            })
            .catch(err => {
                reject(err)
            })
    })
}

export const Settings = {
    allSettings,
    settingsById,
    addSettings,
    updateSettings,
    allNotifications,
    markAsRead
}
