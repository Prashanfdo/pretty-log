require('colors');
var logLevel = 1;

exports.setLogLevel = function  (level) {
	switch(level){
		case 'info': 
			logLevel = 1;
			break;
		case 'warn': 
			logLevel = 2;
			break;
		case 'error': 
			logLevel = 3;
			break;
		default: 
			logLevel = 0;
			break;
	}
}
exports.error = function (msg) {
	if(logLevel >= 3){
	  console.log('[ERROR] => '.red + msg);
	}
}

exports.warn = function (msg) {
	if(logLevel >= 2){
	  console.log('[WARN] => '.blue + msg)
	}
}

exports.info = function (msg) {
	if(logLevel >= 1){
	  console.log(msg);
	}
}

exports.debug = function (msg) {
	if(logLevel >= 0){
  		console.log('[DEBUG] => '.yellow + msg)
	}
}

