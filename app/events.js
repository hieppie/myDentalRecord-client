const store = require('./store')
const dentalUi = require('./ui')
const dentalApi = require('./api')
const getFormFields = require('../lib/get-form-fields')
const { apiUrl } = require('./config')

// AUTH EVENTS

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

// TREATMENTS EVENTS

// CREATE
const onCreateTreatment = function (event) {
  // prevent default submit action to stop the page from refreshing
  event.preventDefault()
  // create a javascript object from the form (event.target) where the user entered the book information
  const formData = getFormFields(event.target)
  // make API call to create one tx with the data we grabbed from the form
  dentalApi
    .createTreatment(formData)
  // if the API call is successful then invoke the onCreateSuccess function
    .then(dentalUi.onCreateSuccess)
  // // if the API call fails then run our onError function
  //   .catch(dentalUi.onError)
}

// INDEX
const onIndexTreatments = function () {
  dentalApi.index()
  // pass response back to show on Ui
    .then((response) => dentalUi.onIndexSuccess(response))
    .catch(() => dentalUi.onIndexFailure)
}

// SHOW
// Show a tx (a show or retrieve action)
const onShowTreatment = function (event) {
  // prevent default submit action to stop the page from refreshing
  event.preventDefault()
  // create a javascript object from the form (event.target) where the user entered the tx id
  const formData = getFormFields(event.target)
  // make API call for getting one tx with the id of the tx we grabbed from the form
  dentalApi.showTreatment(formData.treatment.id)
    // if the API call is successful then pass the data to the onShowSuccess function
    .then(dentalUi.onShowSuccess)
  // if the API call fails then run our onError function
  // .catch(ui.onError)
}

// Handle submitting the dynamic update forms
const onUpdateTreatment = function (event) {
  // prevent default submit action to stop the page from refreshing
  event.preventDefault()

  // event.target is the update form that was submitted
  const updateForm = event.target

  // Extract the id from the update form that was submitted's data-id attribute
  const id = $(updateForm).data('id')

  // create a javascript object from the form where the user entered the tx information
  const formData = getFormFields(event.target)

  // make API call to update one book with the data we grabbed from the form
  dentalApi.updateTreatment(id, formData)

    // if the API call is successful then invoke the onUpdateSuccess function
    .then(dentalUi.onUpdateSuccess)

  // // if the API call fails then run our onError function
  // .catch(ui.onError)
}

module.exports = {
  // AUTH
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword,

  // TREATMENTS
  onCreateTreatment,
  onIndexTreatments,
  onShowTreatment,
  onUpdateTreatment
}
