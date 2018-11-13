<template>
  <div class="post">
    <h2 class="hello">Dashboard {{id}} {{ $attrs }}</h2>
    <div class="loading" v-if="loading">Loading...</div>
    <div v-if="error" class="error">
      {{ error }}
    </div>
    <transition name="slide">
      <div  :class="`${$options.name}__data`">
        <li v-for="(value, propertyName) in userInfo" v-bind:key="propertyName">
          {{ propertyName }} :  {{ value }}
        </li>
      </div>
      <!--
        giving the post container a unique id triggers transitions
        when the post id changes.
      -->
      <div v-if="post" class="content" :id="post.id">
        <h2>{{ post.title }}</h2>
        <p>{{ post.body }}</p>
      </div>
    </transition>
  </div>
</template>

<script>
/* eslint-disable */
  import axios from "../../node_modules/axios/dist/axios.min";
  import Configuration from "../configuration";
  const config = new Configuration();
export default {
  props: {
    id: {
      type: String,
      default: 'Vue!'
    }
  },

  data () {
    return {
      loading: false,
      post: null,
      error: null
    }
  },
  created () {
    this.fetchData()
  },
  watch: {
    '$route': 'fetchData'
  },
  computed: {
    userInfo () {
      return this.$store.state.sUserInfo
    },
    // currentVisit () {
    //   return this.$store.state.sVisitInfo
    // },
    // activity () {
    //   return this.$store.state.sActivityInfo
    // },
    // visitData () {
    //   return this.$store.state.sVisitDataInfo
    // }
  },
  methods: {
    getSomething: function(url, callback) {
      axios
      .get(url)
      .then(response => {
        callback(null, response.data);
      })
      .catch(error => {
        var e = error.response ? error.response.status : error.message
        callback(e);
      });
    },
    // loadData: function() {
    //   var url2 = new URL(window.location);
    //   var params2 = new URLSearchParams(url2.search);
    //   var userId = params2.get("user");
    //   console.log("Store user id from incoming url ", url2);
    //   this.$store.commit("resetInfo");
    //   if (userId) {
    //     this.$store.commit("setUserId", userId);
    //     this.loadUserInfo(userId);
    //   }
    // },
    loadUserInfo: function(userId) {
      return new Promise((resolve, reject) => {
        //var userId = this.$store.userId
        var apiUrl = '/api/' // config.getApiUrl()
        let url = apiUrl + "users/" + userId;
        console.log("In loadUserInfo ", url);
        this.getSomething(url, (error, results) => {
          let data = {};
          if (error || !results.user) {
            console.log('load error', error)
            console.log('load results', results)
            let msg = "User not found. This is an ERROR because the incoming request indicated a user should be registered"
            this.$store.commit("setValidUser", false);
            return reject(msg);
          }
          data = Object.assign({}, results.user);
          console.log("Found user information ... store it and then load user data", data);
          this.$store.commit("setValidUser", true);
          this.$store.commit("setUserInfo", data);
          // this.loadCurrentVisit(userId, data);
          resolve();
        });
      });
    },
    fetchData () {
      this.error = this.post = null
      this.loading = true
      console.log('load with id ', this.$route.params.id)
      this.loadUserInfo(this.$route.params.id)
      .then( () => {
        this.loading = false
        this.post = {title:'ff', body:"body"}
      }).catch ((err) => {
        this.loading = false
        this.error = err.toString()
      })
      // getPost(this.$route.params.id, (err, post) => {
      //   this.loading = false
      //   if (err) {
      //     this.error = err.toString()
      //   } else {
      //     this.post = post
      //   }
      // })
    }
  }
}
</script>
