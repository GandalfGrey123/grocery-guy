const errorStamp = require('./error/ErrorStamp');
const SEVERITY = require('./error/ErrorSeverity')

const GROCERY_ERRORS = {
    invalidToken: errorStamp(
        null,
        "you are unauthorized",
        SEVERITY.user_unauthorized_error,
        null,
    ),
}
module.exports = GROCERY_ERRORS;