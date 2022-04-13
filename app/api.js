const store = require('./store')
const config = require('./config')

const signUp = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-up',
    data
  })
}

module.exports = {
  signUp: signUp
  // signIn,
  // signOut,

}
