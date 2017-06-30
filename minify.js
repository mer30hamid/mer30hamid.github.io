/*
https://github.com/srod/node-minify
*/
const readline = require('readline');
var fs = require('fs');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
var compressor = require('node-minify');
var jsOutputFile = './js/main.min.js';
var cssOutputFile = './css/main.min.css';
var cdnLocalPath = '../cdn.takwp.ir/docs/';

rl.question('minify css files? ', (answer) => {
  // TODO: Log the answer in a database
  if ((answer.toLowerCase() == 'y') || (answer.toLowerCase() == 'yes')){
	console.log(`your answer: ${answer} . processing CSS files ...`);
    compressor.minify({
      compressor: 'csso',
      input: ['./css/animate.css','./css/uno.css','./css/monokai.css','./css/main.css'],
      output: cssOutputFile,
      options: {
        restructureOff: true // turns structure minimization off 
      },
      callback: function (err, min) {}
    });
	if (cdnLocalPath)
		fs.createReadStream(cssOutputFile).pipe(fs.createWriteStream(cdnLocalPath+'css/main.min.css'));
 }
 rl.question('minify js files? ', (answer) => {
  // TODO: Log the answer in a database
  if ((answer.toLowerCase() == 'y') || (answer.toLowerCase() == 'yes')){
	console.log(`your answer: ${answer} . processing JS files...`);
    compressor.minify({
      compressor: 'uglifyjs',
      input: ['./js/jquery.min.js','./js/jquery.timeago.min.js','./js/main.js'],
      output: './js/main.min.js',
      callback: function (err, min) {}
    });
	if (cdnLocalPath)
		fs.createReadStream(jsOutputFile).pipe(fs.createWriteStream(cdnLocalPath+'js/main.min.js'));

  }
  rl.close();
  });
});
