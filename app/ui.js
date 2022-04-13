const store = require('./store')

const onSignUpSuccess = function () {
  $('#sign-up-message').html('Signed up successfully!').css('color', 'green')
  $('form').trigger('reset')
}

const onSignUpFailure = function () {
  $('#sign-up-message').html('Error: Can not sign up').css('color', 'red')
  $('form').trigger('reset')
}

const onSignInSuccess = function (response) {
  $('form').trigger('reset')
  $('#sign-in-message').html('You are signed in').css('color', 'green').show()
  console.log(response)
  // store data from the response in mt store object. store this which need token from user to change pw or log out
  store.user = response.user
}

const onSignInFailure = function () {
  // $('#success-message').hide()
  $('#sign-in-message').html('Error: can not sign in!').css('color', 'red')
}

const onSignOutSuccess = function () {
  $('form').trigger('reset')
  $('#sign-out-message').html('You successfully signed out').css('color', 'white')
}

const onSignOutFailure = function () {
  $('#sign-out-message').html('You successfully signed out').css('color', 'white')
}

const onChangePasswordSuccess = function () {
  $('#change-pw-message')
    .html('You successfully changed your password')
    .css('color', 'white')
}

const onChangePasswordFailure = function () {
  $('#change-pw-message').html('Error on change password').css('color', 'red')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure

}
