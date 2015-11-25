App.factory('geoLocalisation', function() {
	var coords;
	getUserCoords = function (cb) {
		if(!coords && navigator.geolocation) {
			navigator.geolocation.getCurrentPosition( function (pos) {
				onUserChoice(cb, pos);
			}, function() {
				onUserChoice(cb);
			});

		} else {
			cb(coords);
		}
	},

	onUserChoice = function (cb, pos) {
		if(pos) {
			coords= pos;
		}

		cb(coords);
	};

	return {
		canGetCoords: navigator.geolocation,
		getUserCoords: getUserCoords
	};

});