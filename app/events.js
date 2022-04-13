const store = require('./store')
const dentalUi = require('./ui')
const dentalApi = require('./api')
const getFormFields = require('../lib/get-form-fields')

const onSignup = function (event) {
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

module.exports = {
  onSignUp: onSignup
  // onSignIn,
  // onSignOut,

}
