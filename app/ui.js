const store = require('./store')

// AUTH

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
  $('#show-treatment-div, #sign-out-div, #change-pw-div').show()
  $('#sign-in-div, #sign-up-div').hide()
}

const onSignInFailure = function () {
  // $('#success-message').hide()
  $('#sign-in-message').html('Error: can not sign in').css('color', 'red')
}

const onSignOutSuccess = function () {
  $('form').trigger('reset')
  $('#sign-out-message').html('You successfully signed out').css('color', 'white')
  $('#sign-in-div, #sign-up-div').show()
  $('#show-treatment-div, #sign-out-div, #change-pw-div').hide()
}

const onSignOutFailure = function () {
  $('#sign-out-message').html('Something Went Wrong').css('color', 'white')
}

const onChangePasswordSuccess = function () {
  $('#change-pw-message')
    .html('You successfully changed your password. Sign in with new password')
    .css('color', 'white')
  $('form').trigger('reset')
  $('#sign-in-div, #sign-up-div').show()
  $('#show-treatment-div, #sign-out-div, #change-pw-div').hide()
}

const onChangePasswordFailure = function () {
  $('#change-pw-message').html('Error on change password').css('color', 'red')
}

// TREATMENTS

const onCreateSuccess = function () {
  // add success message to content
  $('#treatments-create-message').html('Treatment Logged')

  // we just created a new treatment!
  // we can add a message to let the users know they should request all of
  // the treatments again to see the newly created tx included
  $('#treatments-display').html(
    ''
  )

  // add class for success messaging
  $('#treatments-create-message').addClass('success')

  // use setTimeout to allow the success message to stay for 5 seconds before
  // the message is replaced with '' and the 'success' class is removed
  setTimeout(() => {
    $('#treatments-create-message').html('')
    $('#treatments-create-message').removeClass('success')
  }, 3000)

  // reset all forms
  $('form').trigger('reset')
}

const onIndexSuccess = function (responseData) {
  // extract all the Tx from the response's data into a variable
  const treatments = responseData.allTreatments
  // log the information we get back from the API so we know how we can
  // interact with it.
  console.log(responseData)
  // create a string that will store the html for all of the txs we want to
  // display on the page. Start as an empty string.
  let treatmentsHtml = ''
  // loop through each tx from the API
  treatments.forEach((treatment) => {
    // add (concatenate) the tx html for each tx, to the treatmentsHtml string
    // when adding the delete button add a data-id attribute, with the id of the
    // button we want to delete
    // add a data-id attribute for our dynamic edit form as well
    treatmentsHtml += `
    <section class="index-show">
    <div class="treatment">
      <h2 class="treatment-name">${treatment.name}</h2>
      <p>Tooth #: ${treatment.tooth}</p>
      <p>Radiographs: ${treatment.radiographs}</p>
      <p>Date of service: ${treatment.date}</p>
      <p>Treatment ID: ${treatment._id}</p>
      <p>Patient ID: ${treatment.owner}</p>
      
      <form id=${treatment._id} class="update-treatment-list hide" data-id=${treatment._id}>
        <input class="form-control-lg" name="treatment[name]" type="text" placeholder="Treatment Name ">
        <input class="form-control-lg" name="treatment[tooth]" type="text" placeholder="Tooth #">
        <input class="form-control-lg" name="treatment[radiographs]" type="text" placeholder="Type of X-rays">
        <input class="form-control-lg" name="treatment[date]" type="date" placeholder="Date of Service">
        <button class="btn btn-outline-success list-button" type="submit">Submit Update</button>
      </form>
      <div class="divider"></div>
      <div class="divider"></div>
      <button data-id=${treatment._id}  class="update-toggle btn btn-outline-warning list-button" >Update</button>
      <button class="delete-treatment-list btn btn-outline-danger list-button" data-id=${treatment._id}>Delete Treatment</button>
    </div>
    <div class="divider"></div>
       </section>
    `
  })

  // set the html for all of our txs all at once
  $('#treatments-display').html(treatmentsHtml)
}

const onShowSuccess = function (responseData) {
  // extract all the Tx from the response's data into a variable
  const treatment = responseData.treatment
  // log the information we get back from the API so we know how we can
  // interact with it.
  console.log(responseData)
  // build HTML element with data for one tx
  // const treatmentHtml = `
  //  <h4>Treatment: ${treatment.name}</h4>
  //     <p>Tooth #: ${treatment.tooth}</p>
  //     <p>Radiographs: ${treatment.radiographs}</p>
  //     <p>Date of service: ${treatment.date}</p>
  //     <p>Treatment ID: ${treatment._id}</p>
  //     <p>Patient ID: ${treatment.owner}</p>
  //   <br>
  // `

  const treatmentHtml = `
  <section class="index-show">
    <div class="treatment">
      <h2 class="treatment-name" >${treatment.name}</h2>
      <p>Tooth #: ${treatment.tooth}</p>
      <p>Radiographs: ${treatment.radiographs}</p>
      <p>Date of service: ${treatment.date}</p>
      <p>Treatment ID: ${treatment._id}</p>
      <p>Patient ID: ${treatment.owner}</p>
      
      <form id=${treatment._id} class="update-treatment-list hide" data-id=${treatment._id}>
        <input class="form-control-lg" name="treatment[name]" type="text" placeholder="Treatment Name">
        <input class="form-control-lg" name="treatment[tooth]" type="text" placeholder="Tooth #">
        <input class="form-control-lg" name="treatment[radiographs]" type="text" placeholder="Type of X-rays">
        <input class="form-control-lg" name="treatment[date]" type="date" placeholder="Date of Service">
        <button class="btn btn-outline-success list-button" type="submit">Submit Update</button>
      </form>
      <div class="divider"></div>
      <div class="divider"></div>
      <button data-id=${treatment._id}  class="update-toggle btn btn-outline-warning list-button" >Edit</button>
      <button class="delete-treatment-list btn btn-outline-danger list-button"" data-id=${treatment._id}>Delete Treatment</button>
    </div>
    <div class="divider"></div>
  </section>
  `
  // replace whatever was in the treatments-display element with our treatmentHtml
  $('#treatments-display').html(treatmentHtml)
  // reset all forms
  $('form').trigger('reset')
}

const onUpdateSuccess = function (responseData) {
  // add success message to our treatments-update-message element
  $('#treatments-update-message').html('Treatment Updated')

  // empty out the treatments-display element in case it was displaying information
  // about the tx we just updated, replace with a message for the user to get
  // all the txs again.
  $('#treatments-display').html(
    ''
  )

  // add class for success messaging
  $('#treatments-update-message').addClass('success')

  // use setTimeout to allow the success message to stay for 5 seconds before
  // the message is replaced with '' and the 'success' class is removed
  setTimeout(() => {
    $('#treatments-update-message').html('')
    $('#treatments-update-message').removeClass('success')
  }, 3000)

  // reset all forms
  $('form').trigger('reset')
}

const onDestroySuccess = function () {
  // add success message to our treatments-destroy-message element
  $('#treatments-destroy-message').html('Treatment Deleted')

  // empty out the treatments-display element in case it was displaying information
  // about the tx we just deleted, replace with a message for the user to get
  // all the txs again.
  $('#treatments-display').html(
    ''
  )

  // add class for success messaging
  $('#treatments-destroy-message').addClass('success')

  // use setTimeout to allow the success message to stay for 5 seconds before
  // the message is replaced with '' and the 'success' class is removed
  setTimeout(() => {
    $('#treatments-destroy-message').html('')
    $('#treatments-destroy-message').removeClass('success')
  }, 3000)

  // reset all forms
  $('form').trigger('reset')
}

module.exports = {
  // AUTH
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,

  // TREATMENTS
  onCreateSuccess,
  onIndexSuccess,
  onShowSuccess,
  onUpdateSuccess,
  onDestroySuccess
}
