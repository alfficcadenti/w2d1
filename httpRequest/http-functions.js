
module.exports = function getHTML (options, callback) {
  var https = require('https');

  https.get(options,callback, function () {

    var html = "";
    // the callback is invoked when a `data` chunk is received
    response.on('data', function (data) {
      html += data;
    });

    // the callback is invoked when all of the data has been received
    // (the `end` of the stream)
    response.on('end', function(callback) {
      callback(html);
      console.log('Response stream complete.');
    });
  });

}