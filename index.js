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



if (document.body.addEventListener) {
	/*For Firefox, Opera, Chrome, Safari 
	*/
	document.body.addEventListener("online", emitOnline, false);
	document.body.addEventListener("offline", emitOffline, false);
}
else {
	/* For IE
	*/
	document.body.ononline = emitOnline;
	document.body.onoffline = isOffline;
}