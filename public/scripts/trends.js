
App.controller('trendsCtrl', ['$scope' , '$rootScope', 'ajaxCalls', 'geoLocalisation', function($scope , $rootScope, ajaxCalls , geoLocalisation) {
	$rootScope.section = 'trends';
	
	
		

		ajaxCalls.getMyPlace($rootScope.latitude, $rootScope.longitude, function(data) {
					console.log(data);
					if(data.data != ''){
						$scope.idLocation=data.data[0].parentid;
						console.log($scope.idLocation);

						ajaxCalls.getTrend( $scope.idLocation, function(data){
						$scope.trends=data.data[0].trends;
						console.log($scope.trends);
						});
					}

					});
		
	

	


	
} ]);