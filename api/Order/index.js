import axios from "axios";
import { config } from "../../config";

const allOrders = header => {
  return new Promise((resolve, reject) => {
    axios
      .get(config.apiUrl + "/api/orders", {
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

const orderByStatusType = (data, header) => {
  return new Promise((resolve, reject) => {
    axios
      .get(config.apiUrl + "/api/order/" + data, {
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

const orderById = (data, header) => {
  return new Promise((resolve, reject) => {
    axios
      .get(config.apiUrl + "/api/order/" + data, {
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

export const Order = {
  allOrders,
  orderById,
  orderByStatusType
};
