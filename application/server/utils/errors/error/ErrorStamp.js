const errorStamp = (formField, message, severity, ) => {
    return ({
        formField: formField,
        errorMessage: message,
        errorSeverity: severity,
    })
}

const errorStampServer = (errorMessage, functionName, severity) => {
    return ({
    	errorMessage: errorMessage,
    	serverAction: functionName,
    	errorSeverity: severity,
    });
}

module.exports = {
    errorStamp,
    errorStampServer,
};