const axios = require('axios');

axios.interceptors.request.use((req) => {
  return req
}, function(error) {
     return Promise.reject(error)
});

axios.interceptors.response.use((response) => {
  return response
}, function(error) {
      let windowErr = window.location.origin + "/error"
      if(!window.location.href.includes("/error")) {
        window.location.href = windowErr + "?msg=" + error.message
      }
   return Promise.reject(error)
})