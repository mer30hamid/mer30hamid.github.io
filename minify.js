var compressor = require('node-minify');

compressor.minify({
  compressor: 'csso',
  input: ['./css/main.css', './css/uno.css', './css/animate.css','./css/monokai.css'],
  output: './css/main.min.css',
  options: {
    restructureOff: true // turns structure minimization off 
  },
  callback: function (err, min) {}
});


compressor.minify({
  compressor: 'uglifyjs',
  input: './js/main.js',
  output: './js/main.min.js',
  callback: function (err, min) {}
});


/*
compressor.minify({
  compressor: 'yui-js',
  input: './js/main.js',
  output: './js/main.min.js',
  options: {
    'line-break': 80,
    charset: 'utf8'
  },
  callback: function (err, min) {}
});
*/

/*
compressor.minify({
  compressor: 'gcc',
  input: './js/main.js',
  output: './js/main.min.js',
  options: {
    compilation_level: 'ADVANCED_OPTIMIZATIONS',
    language: 'ECMASCRIPT6',
	closure_output_charset: 'utf8'
    
  },
  callback: function (err, min) {}
});
*/