App.controller('homeCtrl', ['$scope' , '$rootScope', 'ajaxCalls', 'geoLocalisation', function($scope , $rootScope, ajaxCalls , geoLocalisation) {
	$rootScope.section = 'home';
	ajaxCalls.getHome( function (data) {
		$scope.twitters= data.data;
		console.log($scope.twitters[0]);
		console.log($scope.twitters);

		/*for(i=0; i< $scope.twitters.length; i++){
			$scope.twitters[i].created_at
		}*/


	});

	geoLocalisation.getUserCoords( function (geoLoc) {
			
			$rootScope.latitude= geoLoc.coords.latitude;
			$rootScope.longitude= geoLoc.coords.longitude;
			console.log($scope.latitude, ' , ', $scope.longitude);

					
		});	


} ]);