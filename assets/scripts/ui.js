'use strict'
const store = require('../store.js')

const signUpSuccess = data => {
  $('#message').text('Signed up successfully!')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('signUpSuccess ran. Data is :', data)
}

const signUpFailure = data => {
  $('#message').text('Error on sign up')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.log('signUpFailure ran. Error is :', data)
}

const signInSuccess = data => {
  store.user = data.user
  $('#message').text('Signed in successfully!')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('signInSuccess ran. Data is :', data)
}

const signInFailure = data => {
  $('#message').text('Error on sign in')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.log('signUpFailure ran. Error is :', data)
}

const signOutSuccess = data => {
  // store.user = data.user
  $('#message').text('Signed out successfully!')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('signOutSuccess ran. Data is :', data)
}

const signOutFailure = data => {
  $('#message').text('Error on sign out')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.log('signOutFailure ran. Error is :', data)
}
module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure
}
