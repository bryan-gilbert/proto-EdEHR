import axios from '../node_modules/axios/dist/axios.min'

export default class StoreHelper {
  constructor (store) {
    this.store = store
  }
  putRequest (url, bodyData) {
    return new Promise((resolve, reject) => {
      axios
      .put(url, bodyData)
      .then(results => {
        resolve(results)
      })
      .catch(error => {
        var msg = `Failed put to ${url} with error: ${error.message}`
        console.error(msg)
        reject(msg)
      })
    })
  }


  }

  loadInstructorCourses () {
    var apiUrl = this.store.state.apiUrl
    let userId = this.store.state.sUserInfo._id
      // console.log('In load instructor courses data url/id: ' + apiUrl + ' / ' + userId)
    return new Promise(() => {
      let url = `${apiUrl}/users/instructor/courses/${userId}`
        // console.log('In load instructor courses data ', url)
      axios.get(url).then(response => {
          // console.log('load courses', response.data)
        var courses = response.data['courses']
        this.store.commit('setCourses', courses)
      })
    })
  }
}
