'use strict';

module.exports.helloWorld = (event, context, callback) => {
  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*', // Required for CORS support to work
    },
    body: JSON.stringify({
      message: 'Congratulations! You succesfully exectued an AWS Lambda!',
      input: event,
    }),
  };

  callback(null, response);
};
