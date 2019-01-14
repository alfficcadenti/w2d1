
module.exports = function getHTML (options, callback) {
  var https = require('https');

  https.get(options, function (response) {

    var chunks = "";
    // the callback is invoked when a `data` chunk is received
    response.on('data', function (data) {
      chunks += data;
    });

    // the callback is invoked when all of the data has been received
    // (the `end` of the stream)
    response.on('end', function() {
      callback(chunks);
      console.log('Response stream complete.');
    });
  });
};