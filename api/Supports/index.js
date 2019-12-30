import axios from 'axios'
import {config} from '../../config'

// const allSupports = (header) => {
//     return new Promise((resolve, reject) => {
//         axios.get(config.apiUrl + '/api/supports', { headers: { Authorization: header } })
//             .then(resp => {
//                 resolve(resp)
//             })
//             .catch(err => {
//                 reject(err)
//             })
//     })
// }
const allSupports = (type,user_id,header) => {
  return new Promise((resolve, reject) => {
      if(type === 'admin'){
        axios.get(config.apiUrl +'/api/supports',{headers:{ Authorization: header}})
        .then(resp => {
            resolve(resp)
        })
        .catch(err => {
            reject(err)
        })
      }else{
        axios.get(config.apiUrl +'/api/supports/'+ user_id,{headers:{ Authorization: header}})
        .then(resp => {
            resolve(resp)
        })
        .catch(err => {
            reject(err)
        })
      }
  })
}

const allPriorities = (header) =>{
  return new Promise((resolve, reject) => {
    axios.get(config.apiUrl +'/api/priorities', { headers: { Authorization: header } })
    .then(resp => {
        resolve(resp)
    })
    .catch(err => {
        reject(err)
    })
  })
}

const supportById = (data, header) => {
    return new Promise((resolve, reject) => {
        axios.get(config.apiUrl + '/api/support/'+data, {headers:{ Authorization: header}})
            .then(resp => {
                resolve(resp)
            })
            .catch(err => {
                reject(err)
            })
    })
}

const supportByUserId = (data, header) => {
  return new Promise((resolve, reject) => {
      axios.get(config.apiUrl + '/api/support/user/'+data, {headers:{ Authorization: header}})
          .then(resp => {
              resolve(resp)
          })
          .catch(err => {
              reject(err)
          })
  })
}
const addSupport = (data, header) => {
    return new Promise((resolve, reject) => {
        axios.post(config.apiUrl + '/api/support', data, { headers: { Authorization: header } })
            .then(resp => {
                resolve(resp)
            })
            .catch(err => {
                reject(err)
            })
    })
}

const addSupportReply = (data, header) => {
  return new Promise((resolve, reject) => {
      axios.post(config.apiUrl + '/api/support/reply', data, { headers: { Authorization: header } })
          .then(resp => {
              resolve(resp)
          })
          .catch(err => {
              reject(err)
          })
  })
}

const getSupportReplies = (data, header) => {
  return new Promise((resolve, reject) => {
    axios.get(config.apiUrl+'/api/support/replies/'+data, { headers: { Authorization: header } })
    .then(resp => {
        resolve(resp)
    })
    .catch(err => {
        reject(err)
    })
  })
}
const updateSupport = (data,status, header) => {
    return new Promise((resolve, reject) => {
        axios.patch(config.apiUrl + '/api/support/status/' + data, {status : status}, { headers: { Authorization: header } })
            .then(resp => {
                resolve(resp)
            })
            .catch(err => {
                reject(err)
            })
    })
}

export const Supports = {
    addSupport,
    supportByUserId,
    supportById,
    allPriorities,
    allSupports,
    updateSupport,
    getSupportReplies,
    addSupportReply
}
