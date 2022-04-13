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

const onIndexSuccess = function (responseData) {
  // extract the books from the response's data into a variable
  const treatments = responseData.treatments

  // log the information we get back from the API so we know how we can
  // interact with it.
  console.log(responseData)

  // create a string that will store the html for all of the books we want to
  // display on the page. Start as an empty string.
  let treatmentsHtml = ''

  // loop through each book from the API
  treatments.forEach((treatment) => {
    // add (concatenate) the book html for each book, to the booksHtml string
    //
    // when adding the delete button add a data-id attribute, with the id of the
    // button we want to delete
    // add a data-id attribute for our dynamic edit form as well
    treatmentsHtml += `
      <h4>Name: ${treatment.name}</h4>
      <p>Tooth: ${treatment.tooth}</p>
      <p>radiograph: ${treatment.radiograph}</p>
      <p>date: ${treatment.date}</p>
      <p>ID: ${treatment._id}</p>
    `
  })

  // set the html for all of our books all at once
  $('#treatments-display').html(treatmentsHtml)
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onIndexSuccess

}
