const store = require('./store')
const config = require('./config')

const signUp = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-up',
    data
  })
}

const signIn = function (data) {
  console.log(store)
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-in',
    data
  })
}

const signOut = function () {
  // console.log(store)
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/sign-out',
    headers: {
      // needs the token from sign in to sign out
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const changePassword = function (data) {
  // console.log('data is ', data)
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data
    // data: data
  })
}

const createTreatment = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/treatments',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    // include the tx data that we will use to create the tx
    data: formData
  })
}

const index = function () {
  return $.ajax({
    url: config.apiUrl + '/treatments',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

// make GET request to /treatments/:id to get a single tx
// getting a single resource is commonly called a show or retrieve action
const showTreatment = function (id) {
  return $.ajax({
    url: config.apiUrl + '/treatments/' + id,
    method: 'GET',
    headers: {
      // require token. also the server requireOwnwership for this
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const updateTreatment = function (id, formData) {
  return $.ajax({
    url: config.apiUrl + '/treatments/' + id,
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    // include the tx data that we will use to create the tx
    data: formData
  })
}

const destroyTreatment = function (id) {
  return $.ajax({
    url: config.apiUrl + '/treatments/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
    // data: formData
  })
}

module.exports = {
  // auth
  signUp,
  signIn,
  signOut,
  changePassword,

  // treatments
  createTreatment,
  index,
  showTreatment,
  updateTreatment,
  destroyTreatment
}
