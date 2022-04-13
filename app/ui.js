const store = require('./store')

const onSignUpSuccess = function () {
  $('#sign-up-message').html('Signed up successfully!').css('color', 'green')
  $('form').trigger('reset')
}

const onSignUpFailure = function () {
  $('#sign-up-message').html('Error: Can not sign up').css('color', 'red')
  $('form').trigger('reset')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure
  // onSignInSuccess,
  // onSignInFailure,
  // onSignOutSuccess,
  // onSignOutFailure,

}
