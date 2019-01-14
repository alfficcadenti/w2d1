var https = require('https');

function getHTML (options, callback) {

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

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML (requestOptions, printHTML);