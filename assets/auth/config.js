'use strict'

let apiUrl
const apiUrls = {
  production: 'https://aqueous-atoll-85096.herokuapp.com',
  development: 'https://tic-tac-toe-wdi.herokuapp.com/'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.production
} else {
  apiUrl = apiUrls.development
}

module.exports = {
  apiUrl
}
