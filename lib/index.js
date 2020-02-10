const request = require('request-promise');
module.exports = async function (options, logStream) {

    let message = {};
    logRequest(message, options);
    try {
        let result = await request(options);
        logResponse(message, result);
        return result;
    } catch (err) {
        logError(message, err);
        throw err;
    } finally {
        if (Object.keys(message).length > 0) {
            logStream.write(JSON.stringify(message));
        }
    }
}

function logRequest(message, options) {
    //TODO: log the request details
}

function logResponse(message, result) {
    //TODO: log the response details
}

function logError(message, err) {
  //TODO: log the error
}