// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const dentalEvents = require('./events')

// const toggleTreatmentForm = function () {
//   const form =
//   $(this)
//     .closest('.treatment')
//     .find('.update-treatment-form')

//   form.toggleClass('hidden')
//   if (form.hasClass('hidden')) {
//     $(this).html('Click to show update form')
//   } else {
//     $(this).html('Click to hide update form')
//   }
//   console.log($(this))
//   console.log($(this).closest('.treatment'))
// }

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

  // on the list
  $('#treatments-display').on('click', '.delete-treatment-list', dentalEvents.onDeleteListTreatment)

  $('#treatments-display').on('submit', '.update-treatment-list', dentalEvents.onUpdateListTreatment)

  // update on list button toggle form
  $('#treatments-display').on('click', '.update-toggle', dentalEvents.onUpdateToggle)

  // $('.update-toggle').on('click', function () {
  //   $('.update-treatment-list').toggle()
  // })

  // HIDE/SHOW
  $('#show-treatment-div, #sign-out-div, #change-pw-div').hide()
})
