// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const dentalEvents = require('./events')

$(() => {
  // auth
  $('#sign-up-form').on('submit', dentalEvents.onSignUp)
  $('#sign-in-form').on('submit', dentalEvents.onSignIn)
  $('#sign-out-button').on('click', dentalEvents.onSignOut)
  $('#change-pw-form').on('submit', dentalEvents.onChangePassword)

  // treatments
  $('#treatments-index').on('click', dentalEvents.onIndexTreatments)
  $('#treatments-show').on('submit', dentalEvents.onShowTreatment)
  $('#treatments-create').on('submit', dentalEvents.onCreateTreatment)
  $('#treatments-update').on('submit', dentalEvents.onUpdateTreatment)
  $('#treatments-destroy').on('submit', dentalEvents.onDestroyTreatment)
})
