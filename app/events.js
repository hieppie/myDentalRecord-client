const store = require('./store')
const dentalUi = require('./ui')
const dentalApi = require('./api')
const getFormFields = require('../lib/get-form-fields')

const onSignUp = function (event) {
  // prevent refresh after submitting
  event.preventDefault()
  console.log('logging sign up button')

  // get data from form using getFormFields
  const form = event.target
  const data = getFormFields(form)
  console.log(data)

  // api call
  dentalApi.signUp(data)
    .then(() => dentalUi.onSignUpSuccess())
    .catch(() => dentalUi.onSignUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  console.log('logging sign in button')

  const form = event.target
  const data = getFormFields(form)
  console.log(data)

  dentalApi.signIn(data)
    .then((response) => dentalUi.onSignInSuccess(response))
    .catch(() => dentalUi.onSignInFailure())
}

const onSignOut = function () {
  console.log('logging sign out button')
  dentalApi.signOut()
    .then((response) => dentalUi.onSignOutSuccess(response))
    .catch(() => dentalUi.onSignOutFailure())
}

const onChangePassword = function (event) {
  event.preventDefault()
  console.log('logging change pw button')

  const form = event.target
  const data = getFormFields(form)

  dentalApi.changePassword(data)
    .then(() => dentalUi.onChangePasswordSuccess())
    .catch(() => dentalUi.onChangePasswordFailure())
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword

}
