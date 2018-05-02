const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.email = !isEmpty(data.email) ? data.email : " ";
  data.password = !isEmpty(data.password) ? data.password : " ";

  if (!Validator.isEmpty(data.email)) {
    errors.email = "You must use an email.";
  }
  if (Validator.isEmpty(data.password)) {
    errors.password = "You must use a password.";
  }
  if (Validator.isEmail(data.email)) {
    errors.email = "Email is required to SignUp.";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
