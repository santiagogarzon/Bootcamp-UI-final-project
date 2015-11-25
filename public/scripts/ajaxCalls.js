

App.factory('ajaxCalls',[ '$http',   function($http) {
	var url='http://localhost:3000';
	var latitude=0;
	var longitude=0;
	

	return{
		
		//http://localhost:3000/timeline?count=100
		getHome: function(cb) {
			$http
			  .get(url + '/timeline', {
	          	
	            params: {count: '20'}
	      	   })
			  .then( function success (response) {
	                 
	                 cb(response);
		       }, function error (xhr) {
		          }
	           );
		},
		//http://localhost:3000/myplace?lat=-38.7116780&long=-62.2680780
		getMyPlace: function(lat, longs, cb) {
			
			$http
			  .get(url + '/myplace', {

	          params: {lat: lat , long: longs}
	        }).then( function success (response) {
	                 
	                 cb(response);
	                  
		        }, function error (xhr) {
		           }
	        	);
		},
		//http://localhost:3000/trends?id=23424747
		getTrend: function(idP, cb) {
			$http({
				url: url + '/trends',
				method: 'get',
				params: {id:  idP}
			}).then(function success (response) {
					cb(response);
				},
					function error(xhr) {
					}
				);

		},
		//http://localhost:3000/search?q=%23TanBionicaCocaColaFM
		getSearch: function(search, cb) {
			$http({
				url: url + '/search',
				method: 'get',
				params: {q: search}
			}).then( function success (response) {
					cb(response);
				},
					function error(xhr) {

					}
				);
		}


         
	} ;
} ] );
