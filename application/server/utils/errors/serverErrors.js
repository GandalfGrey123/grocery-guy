const {errorStampServer} = require('./error/ErrorStamp');
const SEVERITY = require('./error/ErrorSeverity')

const SERVER_ERRORS = {

	generalError: errorStampServer(
		"services are not available at the moment",
		null,
		SEVERITY.server_general_error,
	),
	passwordSalt: errorStampServer(
		"could not create your password",
		"bcrypt generate password salt",
		SEVERITY.server_salt_password_error,

	),
    passwordHash: errorStampServer(
        "could not create your password",
        "bcrypt generate password hash",
        SEVERITY.server_hash_password_error,
    ),
}
module.exports = SERVER_ERRORS;