"use strict";

export default class Configuration {
  constructor(env) {
    var defaultData = {
      apiHost: "localhost",
      apiPort: env === "development" ? 27000 : 27001
      // apiPath: 'api'
    }; // configData['default']
    this.globalOptions = Object.assign({}, defaultData);
  }

  /*
   Get http or https as defined by Configuration. Defaults to http.
   */
  getApiScheme() {
    var scheme = this.getOption("apiScheme") || "http";
    return scheme;
  }

  getApiHost() {
    return this.getOption("apiHost");
  }

  getApiPort() {
    var port = this.getOption("apiPort");
    return port;
  }

  getApiPath() {
    var path = this.getOption("apiPath");
    return path;
  }

  getApiUrl() {
    var path = this.getApiPath();
    var add = path ? path + "/" : "";
    return this.getBaseUrl() + add;
  }

  getBaseUrl() {
    var scheme = this.getApiScheme();
    var port = this.getApiPort();
    port = port ? ":" + port : "";
    var ipAddress = this.getApiHost();
    return scheme + "://" + ipAddress + port + "/";
  }

  getApiLoggedOnUrl() {
    return this.getApiUrl() + "isLoggedOn";
  }

  setOption(key, value) {
    this.globalOptions[key] = value;
    return this; // return this to allow chaining
  }

  getOption(key) {
    return this.globalOptions[key];
  }
}
