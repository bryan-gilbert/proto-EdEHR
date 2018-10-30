<template>
  <div :class="$options.name">
    <layout-default>
      <router-view/>
    </layout-default>
    <div :class="`${$options.name}__special`">
      <div>From App component: Is user logged on? {{isLoggedOn}}</div>
    </div>

  </div>
</template>

<script>
import LayoutDefault from './layout/LayoutDefault.vue';
import Configuration from '../ehr-configuration'
import UiButton from './ui/UiButton.vue'
import axios from '../../node_modules/axios/dist/axios.min'
import bus from "./eventBus.js"

var config = new Configuration()

export default {
  name: `App`,
  components: {
    LayoutDefault,
    UiButton
  },
  data () {
    return {
      isLoggedOn: false,
      userInfo: {}
    }
  },
  methods: {
    getCookie: function (name) {  /// Retrieve cookie function
      var match = document.cookie.match(new RegExp(name + '=([^;]+)'));
      if (match) return match[1];
      return
    },
    getLoggedOn: function () {
      let url = this.apiUrl + 'isLoggedOn'
      console.log("In getLoggedOn ", url)
      axios.get(url)
      .then( (response) => {
        console.log("got isLoggedOn response ", response)
        this.isLoggedOn = response
      })
      .catch((error) => {
        console.log('axios error ', error.response.status)
        this.isLoggedOn = false
      })
    },
    getSomething: function (url, callback) {
      axios.get(url)
      .then( (response) => {
        callback(null, response.data)
      })
      .catch((error) => {
        console.log('error ', error.response)
        callback(error.response.status)
      })
    },
    getUserInfo: function () {
      var url2 = new URL(window.location);
      var params2 = new URLSearchParams(url2.search);
      let url = this.apiUrl + 'getUserInfo?user=' + params2.get('user')
      console.log("In getUserInfo ", url)
      this.getSomething(url, (error, results) => {
        if(error) {
          this.userInfo = {}
          bus.$emit("user-info", this.userInfo)
        } else {
          this.userInfo = results
          bus.$emit("user-info", results)
        }
      })
    },
    getUserData: function () {
      var url2 = new URL(window.location);
      var params2 = new URLSearchParams(url2.search);
      let url = this.apiUrl + 'getUserData?user=' + params2.get('user')
      console.log("In getUserData ", url)
      this.getSomething(url, (error, results) => {
        if(error) {
          this.userData = {}
          bus.$emit("user-data", this.userInfo)
        } else {
          this.userData = results
          bus.$emit("user-data", results)
        }
      })

    },
    testUpdateData: function() {
      var url2 = new URL(window.location);
      var params2 = new URLSearchParams(url2.search);
      let url = this.apiUrl + 'getUser?user=' + params2.get('user')
      console.log("In getUsr ", url)
      axios.get(url)
      .then( (response) => {
        console.log("user response ", response)
        this.userData = response.data
        bus.$emit("user-data", this.userData)
      })
      .catch((error) => {
        console.log('axios error ', error.response.status)
        this.userData = {}
        bus.$emit("user-data", this.userData)
      })
    },
  },
  computed: {
    thisPagePath : function() {
      var cs = this.getCookie('usr')
      var something = JSON.stringify(cs)
      console.log('computed : ' + something)
        //this.$route.fullPath
      return something
    },
    apiUrl : function() {
      var something = config.getApiUrl()
      console.log("Is logged on url ", something)
      return something
    },
    count () {
      return this.$store.state.count
    }
  },
  mounted: function () {
    this.getLoggedOn()
    this.getUserInfo()
    this.getUserData()
  }
};
</script>

<style lang="scss">
  .App {
    color: white;
  }
</style>
