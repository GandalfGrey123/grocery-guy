const {errorStamp} = require('./error/ErrorStamp');
const SEVERITY = require('./error/ErrorSeverity')

const NEW_USER_ERRORS = {
    invalidEmail: errorStamp(
        "new email field",
        "you have entered an invalid email",
        SEVERITY.user_input_error,
        null,
    ),
    invalidUserName: errorStamp(
        "new username field",
        "you have entered an invalid username",
        SEVERITY.user_input_error,
        null,
    ),
    invalidPassword: errorStamp(
        "new password field",
        "you have entered an invalid password",
        SEVERITY.user_input_error,
        null,
    ),
}
module.exports = NEW_USER_ERRORS;