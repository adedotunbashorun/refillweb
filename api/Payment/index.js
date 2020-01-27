import axios from "axios";
import { config } from "../../config";


const userPayments = (data, header) => {
    return new Promise((resolve, reject) => {
        fetch(`${config.apiUrl}/api/payments/${data.user_type}/${data.user_type_id}`,{
            method: 'GET',
            headers:{
                'Content-Type' : 'application/json',
                'Authorization': header
            }
        })
        .then((response) => response.json())
        .then(resp => {
            resolve(resp)
        })
        .catch(err => {
            reject(err)
        })
    })
}

const allPayments = header => {
  return new Promise((resolve, reject) => {
    axios.get(config.apiUrl + "/api/payments", {
        headers: { Authorization: header }
      })
      .then(resp => {
        resolve(resp);
      })
      .catch(err => {
        reject(err);
      });
  });
};

const paymentById = (data, header) => {
  return new Promise((resolve, reject) => {
      axios.get(config.apiUrl + '/api/payment/'+data, {headers:{ Authorization: header}})
          .then(resp => {
              resolve(resp)
          })
          .catch(err => {
              reject(err)
          })
  })
}


export const Payment = {
    userPayments,
    allPayments,
    paymentById
}
