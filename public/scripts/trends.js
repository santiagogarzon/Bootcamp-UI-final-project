
App.controller('trendsCtrl', ['$scope' , '$rootScope', 'ajaxCalls', 'geoLocalisation', function($scope , $rootScope, ajaxCalls , geoLocalisation) {
	$rootScope.section = 'trends';
	
	$scope.trendsHide=false;
	$scope.twittsHide=false;
	$scope.buttonHide=true;
	
	$scope.back=function(){
	$scope.trendsHide=false;
	$scope.twittsHide=true;	
	$scope.buttonHide=true;
	$scope.twitts= null;
	};
		
	$scope.show= function(index) {
		$scope.trendsHide=true;
		$scope.twittsHide=false;
		$scope.buttonHide=false;
		var txt= $scope.trends[index].name;
		ajaxCalls.getSearch(txt, function(data){

			$scope.twitts= data.data.statuses;
			console.log($scope.twitts);
		})
	};

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