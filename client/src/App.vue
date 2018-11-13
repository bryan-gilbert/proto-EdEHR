<template>
  <div id="app">

    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/foo">Foo</router-link> |
      <router-link to="/bar">Bar</router-link> |
      <router-link to="/bar/baz">Baz</router-link>
    </div>
    <layout-default>
      <router-view/>
    </layout-default>
  </div>
</template>

<script>
import LayoutDefault from "./layout/LayoutDefault.vue";
import Configuration from "./configuration";
// import UiButton from './ui/UiButton.vue'
import axios from "../node_modules/axios/dist/axios.min";

const config = new Configuration();

export default {
  name: `App`,
  components: {
    LayoutDefault
    // UiButton
  },
  methods: {
    getSomething: function(url, callback) {
      axios
        .get(url)
        .then(response => {
          callback(null, response.data);
        })
        .catch(error => {
          callback(error.response.status);
        });
    },

    loadData: function() {
      var url2 = new URL(window.location);
      var params2 = new URLSearchParams(url2.search);
      var userId = params2.get("user");
      console.log("Store user id from incoming url ", url2);
      this.$store.commit("resetInfo");
      if (userId) {
        this.$store.commit("setUserId", userId);
        this.loadUserInfo(userId);
      }
    },
    loadUserInfo: function(userId) {
      return new Promise((resolve, reject) => {
        //var userId = this.$store.userId
        let url = this.apiUrl + "users/" + userId;
        console.log("In loadUserInfo ", url);
        this.getSomething(url, (error, results) => {
          let data = {};
          if (error || !results.user) {
            console.log(
              "User not found. This is an ERROR because the incoming request indicated a user should be registered"
            );
            this.$store.commit("setValidUser", false);
            return reject();
          }
          data = Object.assign({}, results.user);
          console.log(
            "Found user information ... store it and then load user data",
            data
          );
          this.$store.commit("setValidUser", true);
          this.$store.commit("setUserInfo", data);
          this.loadCurrentVisit(userId, data);
          resolve();
        });
      });
    },
    loadCurrentVisit: function(userId, userInfo) {
      return new Promise((resolve, reject) => {
        var visitId = userInfo.currentVisit;
        let url = this.apiUrl + "visits/" + visitId;
        console.log("In loadCurrentVisit ", url);
        this.getSomething(url, (error, results) => {
          let data = {};
          if (error) {
            console.log(
              "Current visit not found. This is an ERROR because the incoming request indicated a user should be registered"
            );
            return reject();
          } else {
            data = Object.assign({}, results.visit);
            console.log(
              "Found visit information ... store it and then visit data",
              data
            );
          }
          this.$store.commit("setVisitInfo", data);
          this.loadVisitData(userId, data);
          this.loadActivityData(userId, data);
          resolve();
        });
      });
    },
    loadActivityData: function(userId, visitInfo) {
      return new Promise(() => {
        let aid = visitInfo.activity;
        let url = this.apiUrl + "activities/" + aid;
        console.log("In activity data ", url);
        this.getSomething(url, (error, results) => {
          let data = {};
          if (error) {
            console.log(
              "load activity data not found. This is an ERROR because the incoming request indicated a user should be registered"
            );
          } else {
            data = Object.assign({}, results.activity);
            console.log("Found activity data", data);
          }
          this.$store.commit("setActivityInfo", data);
        });
      });
    },
    loadVisitData: function(userId, visitInfo) {
      return new Promise(() => {
        let vdid = visitInfo.visitData;
        let url = this.apiUrl + "visitdata/" + vdid;
        console.log("In visit data ", url);
        this.getSomething(url, (error, results) => {
          let data = {};
          if (error) {
            console.log(
              "load visit data not found. This is an ERROR because the incoming request indicated a user should be registered"
            );
          } else {
            data = Object.assign({}, results.visitdata);
            console.log("Found visit data", data);
          }
          this.$store.commit("setVisitDataInfo", data);
        });
      });
    }
  },
  computed: {
    apiUrl: function() {
      var url = config.getApiUrl();
      console.log("apiUrl = ", url);
      return url;
    }
  },
  mounted: function() {
    this.loadData();
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /*color: #2c3e50;*/
  color: white;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
