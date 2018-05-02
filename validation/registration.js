const Validator = require("validator");
const isEmpty = require("./is-empty");
module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : " ";
  data.email = !isEmpty(data.email) ? data.email : " ";
  data.password = !isEmpty(data.password) ? data.password : " ";
  data.password2 = !isEmpty(data.password2) ? data.password2 : " ";

  if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = "Name has min of 2 characters and max of 30";
  }
  if (Validator.isEmpty(data.name)) {
    errors.name = "You must use a name.";
  }
  if (Validator.isEmpty(data.email)) {
    errors.email = "You must use an email.";
  }
  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is required to SignUp.";
  }
  if (Validator.isEmpty(data.password)) {
    errors.password = "You must use a password.";
  }
  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be 6 characters";
  }
  if (Validator.isEmpty(data.password2)) {
    errors.password2 = "Please confirm password.";
  }
  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Password must match.";
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
