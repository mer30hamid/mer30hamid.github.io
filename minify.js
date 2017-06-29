/*
https://github.com/srod/node-minify
*/
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
var compressor = require('node-minify');

rl.question('minify css files? ', (answer) => {
  // TODO: Log the answer in a database
  if ((answer.toLowerCase() == 'y') || (answer.toLowerCase() == 'yes')){
	  console.log(`your answer: ${answer} . processing CSS files ...`);
    compressor.minify({
      compressor: 'csso',
      input: ['./css/animate.css','./css/uno.css','./css/monokai.css','./css/main.css'],
      output: './css/main.min.css',
      options: {
        restructureOff: true // turns structure minimization off 
      },
      callback: function (err, min) {}
    });
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
  }
  rl.close();
  });
 //rl.close();
});
