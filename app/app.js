// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const dentalEvents = require('./events')

$(() => {
  $('#sign-up-form').on('submit', dentalEvents.onSignUp)
  $('#sign-in-form').on('submit', dentalEvents.onSignIn)
  $('#sign-out-button').on('click', dentalEvents.onSignOut)
  $('#change-pw-form').on('submit', dentalEvents.onChangePassword)

  $('#treatment-index').on('click', dentalEvents.onIndexTreatments)
})
