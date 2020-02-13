import axios from 'axios'
import {config} from '../../config'

const allContact = (header) => {
    return new Promise((resolve, reject) => {
        axios.get(config.apiUrl + '/api/contacts', { headers: { Authorization: header } })
            .then(resp => {
                resolve(resp)
            })
            .catch(err => {
                reject(err)
            })
    })
}

const allMessages = (header) => {
  return new Promise((resolve, reject) => {
      axios.get(config.apiUrl + '/api/messages', { headers: { Authorization: header } })
          .then(resp => {
              resolve(resp)
          })
          .catch(err => {
              reject(err)
          })
  })
}

const createMessage = (data, header) => {
  return new Promise((resolve, reject) => {
      axios.post(config.apiUrl + '/api/message', data, {headers:{ Authorization: header}})
          .then(resp => {
              resolve(resp)
          })
          .catch(err => {
              reject(err)
          })
  })
}

const contactById = (data, header) => {
    return new Promise((resolve, reject) => {
        axios.get(config.apiUrl + '/api/contact/'+data, {headers:{ Authorization: header}})
            .then(resp => {
                resolve(resp)
            })
            .catch(err => {
                reject(err)
            })
    })
}

const messageById = (data, header) => {
  return new Promise((resolve, reject) => {
      axios.get(config.apiUrl + '/api/messages/'+data, {headers:{ Authorization: header}})
          .then(resp => {
              resolve(resp)
          })
          .catch(err => {
              reject(err)
          })
  })
}

const replyContact = (data, header) => {
  return new Promise((resolve, reject) => {
      axios.post(config.apiUrl + '/api/contact/'+data.id, data, {headers:{ Authorization: header}})
          .then(resp => {
              resolve(resp)
          })
          .catch(err => {
              reject(err)
          })
  })
}

const deletecontact = (data, header) => {
    return new Promise((resolve, reject) => {
        axios.delete(config.apiUrl + '/api/contact/' + data, { headers: { Authorization: header } })
            .then(resp => {
                resolve(resp)
            })
            .catch(err => {
                reject(err)
            })
    })
}

export const Contact = {
    allContact,
    contactById,
    deletecontact,
    replyContact,
    allMessages,
    messageById,
    createMessage,
}
