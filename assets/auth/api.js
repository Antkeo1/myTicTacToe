'use strict'

const config = require('./config.js')
const store = require('./store.js')

const signUp = data => {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data
  })
}

const signIn = data => {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data
  })
}

const changePassword = data => {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token,
      data
    }
  })
}

const signOut = () => {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const createGame = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=BAhJIiU5ZjQwODQwYzUxMGJkZDc5ZWUyMjk5MGRhMzE5ZjNhNgY6BkVG--4ec07bed51fc3f910f306fb03a4b6f268616ab31'
    }
  })
}

const patchMove = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games/2213',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=BAhJIiU5ZjQwODQwYzUxMGJkZDc5ZWUyMjk5MGRhMzE5ZjNhNgY6BkVG--4ec07bed51fc3f910f306fb03a4b6f268616ab31'
    },
    data
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  createGame,
  patchMove
}
