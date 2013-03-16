var EventEmitter = require('events').EventEmitter,
	offlineEmitter = new EventEmitter,
	emitOnline = function () {
		offlineEmitter.emit("online");
		console.log("online");
	},
	emitOffline = function () {
		offlineEmitter.emit("offline");
		console.log("offline");
	};

module.exports = offlineEmitter;



if (document.body.addEventListener) {
	/*For Firefox, Opera, Chrome, Safari 
	*/
	document.body.addEventListener("online", emitOnline, false);
	document.body.addEventListener("offline", emitOffline, false);
}
else {
	/* For IE
	*/

	if (document.body.ononline == null) {
		document.body.ononline = emitOnline;
	} 
	else { // if someone already wrote an ononline function
		tempOnonline = document.body.ononline; // m
		document.body.ononline = function () {
			tempOnonline();
			emitOnline();
		}
	}

	if (document.body.ononline == null) {
		document.body.onoffline = emitOffline;
	} 
	else { // if someone already wrote an ononline function
		tempOnoffline = document.body.onoffline; // m
		document.body.ononline = function () {
			tempOnoffline();
			emitOffline();
		}
	}
}