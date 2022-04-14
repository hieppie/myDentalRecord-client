const store = require('./store')
const dentalUi = require('./ui')
const dentalApi = require('./api')
const getFormFields = require('../lib/get-form-fields')
const { apiUrl } = require('./config')

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

const onIndexTreatments = function () {
  dentalApi.index()
  // pass response back
    .then((response) => dentalUi.onIndexSuccess(response))
    .catch(() => dentalUi.onIndexFailure)
}

// Show a Tx (a show or retrieve action)
const onShowTreatment = function (event) {
  // prevent default submit action to stop the page from refreshing
  event.preventDefault()

  // create a javascript object from the form (event.target) where the user entered the book id
  const formData = getFormFields(event.target)

  // make API call for getting one book with the id of the book we grabbed from the form
  dentalApi.showTreatment(formData.treatment.id)

    // if the API call is successful then pass the data to the onShowSuccess
    // function
    .then(dentalUi.onShowSuccess)

  // if the API call fails then run our onError function
  // .catch(ui.onError)
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword,
  onIndexTreatments,
  onShowTreatment

}
