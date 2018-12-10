import axios from 'axios'

export default class StoreHelper {
  putRequest(url, bodyData) {
    console.log('PUT to this url', url)
    return new Promise((resolve, reject) => {
      axios
        .put(url, bodyData)
        .then(results => {
          console.log('success storeHelper putRequest')
          resolve(results)
        })
        .catch(error => {
          var msg = `Failed PUT to ${url} with error: ${error.message}`
          console.error(msg)
          reject(msg)
        })
    })
  }
  getRequest(url) {
    console.log('GET to this url', url)
    return new Promise((resolve, reject) => {
      axios
        .get(url)
        .then(results => {
          console.log('success storeHelper getRequest')
          resolve(results)
        })
        .catch(error => {
          var msg = `Failed GET to ${url} with error: ${error.message}`
          console.error(msg)
          reject(msg)
        })
    })
  }
}
