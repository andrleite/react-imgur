var Fetch = require('whatwg-fetch');
var rootUrl = 'https://api.imgur.com/3/';
var apiKey = '6585c2f31ec6bcd';

module.exports = {
  get: function (url) {
    return fetch(rootUrl + url, {
      headers: {
        'Authorization': 'Client-ID ' + apiKey
      }
    })
    .then(function (response) {
      return response.json()
    });
  }
};
