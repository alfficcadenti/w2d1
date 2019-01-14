var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printUpperCase (html) {
  console.log(typeof html);
  console.log(html)
  //var toPrint = html.toUpperCase();
  //console.log(toPrint);

}

getHTML(requestOptions, printUpperCase);