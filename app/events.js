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
  // create a javascript object from the form (event.target) where the user entered the tx information
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

// UPDATE
const onUpdateTreatment = function (event) {
  // prevent default submit action to stop the page from refreshing
  event.preventDefault()
  // event.target is the update form that was submitted
  const updateForm = getFormFields(event.target)
  // Extract the id from the update form that was submitted's data-id attribute
  const id = updateForm.treatment.id
  //  const id = $(updateForm).data('id') <= this was not working
  // create a javascript object from the form where the user entered the tx information
  const formData = getFormFields(event.target)
  // make API call to update one tx with the data we grabbed from the form
  dentalApi.updateTreatment(id, formData)
    // if the API call is successful then invoke the onUpdateSuccess function
    .then(dentalUi.onUpdateSuccess)
  // // if the API call fails then run our onError function
  // .catch(ui.onError)
}

// DESTROY
// Destroy a tx using a form with a text input for the id
const onDestroyTreatment = function (event) {
  // prevent default submit action to stop the page from refreshing
  event.preventDefault()

  const updateForm = getFormFields(event.target)
  const id = updateForm.treatment.id

  // const form = event.target
  // const data = getFormFields(form)
  // console.log(data)

  // // create a javascript object from the form (event.target) where the user entered the tx id
  // const formData = getFormFields(event.target)
  // // const id = formData.treatment.id

  // make API call for destroying one tx with id of the tx we grabbed from the form
  dentalApi.destroyTreatment(id)

    // if the API call is successful then invoke the onDestroySuccess function
    .then(dentalUi.onDestroySuccess)

  // // if the API call fails then run our onError function
  // .catch(dentalUi.onError)
}

// ON THE LIST
const onDeleteListTreatment = function (event) {
  // event.target will tell us more information about the thing that was clicked
  const deleteButton = event.target

  // we need to find the id of the book
  const treatmentId = $(deleteButton).data('id')

  console.log(treatmentId)

  dentalApi

    .destroyTreatment(treatmentId)
    .then(() => dentalUi.onDestroySuccess())
    // .catch(() => dentalUi.onDestroyFailure())
}

const onUpdateListTreatment = function (event) {
  event.preventDefault()
  // event.target will tell us more information about the thing that was clicked
  const updateForm = event.target

  // we need to find the id of the tx
  const treatmentId = $(updateForm).data('id')

  // use getFormFields to get the data from the form
  const data = getFormFields(updateForm)
  console.log(data)

  console.log(treatmentId)

  dentalApi
    .updateTreatment(treatmentId, data)
    .then(() => dentalUi.onUpdateSuccess())
    // .catch(() => dentalUi.onUpdateFailure())
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
  onUpdateTreatment,
  onDestroyTreatment,

  // ON THE LIST
  onDeleteListTreatment,
  onUpdateListTreatment
}
