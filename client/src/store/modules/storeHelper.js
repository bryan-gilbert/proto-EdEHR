import axios from 'axios'

export default class StoreHelper {
  putRequest(context, url, bodyData) {
    console.log('PUT to this url', url)
    return new Promise((resolve, reject) => {
      axios
        .put(url, bodyData)
        .then(results => {
          // console.log('success storeHelper putRequest')
          resolve(results)
        })
        .catch(error => {
          let msg = `Failed PUT to ${url} with error: ${error.message}`
          context.commit('system/setApiError', msg, { root: true })
          reject(msg)
        })
    })
  }
  postRequest(context, url, bodyData) {
    console.log('POST to this url', url)
    return new Promise((resolve, reject) => {
      axios
        .post(url, bodyData)
        .then(results => {
          console.log('success storeHelper putRequest', results)
          resolve(results)
        })
        .catch(error => {
          let msg = `Failed POST to ${url} with error: ${error.message}`
          context.commit('system/setApiError', msg, { root: true })
          reject(msg)
        })
    })
  }
  getRequest(context, url) {
    // console.log('GET to this url', url)
    return new Promise((resolve, reject) => {
      axios
        .get(url)
        .then(results => {
          // console.log('success storeHelper getRequest')
          resolve(results)
        })
        .catch(error => {
          let msg = `Failed GET to ${url} with error: ${error.message}`
          context.commit('system/setApiError', msg, { root: true })
          reject(msg)
        })
    })
  }
}
