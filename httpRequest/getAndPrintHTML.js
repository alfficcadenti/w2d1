var https = require('https');


function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  https.get(requestOptions, function (response) {

  var chunks = "";
  // the callback is invoked when a `data` chunk is received
  response.on('data', function (data) {
    chunks += data;
  });

  // the callback is invoked when all of the data has been received
  // (the `end` of the stream)
  response.on('end', function() {
    console.log(chunks);
    console.log('Response stream complete.');
  });
});

}

getAndPrintHTML();