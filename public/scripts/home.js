App.controller('homeCtrl', ['$scope' , '$rootScope', 'ajaxCalls', 'geoLocalisation', function($scope , $rootScope, ajaxCalls , geoLocalisation) {
	$rootScope.section = 'home';
	backF();

	function backF(){
		$scope.twittsHide=false;
		$scope.descriptionHide=true;
		$scope.buttonHide=true;
		$scope.twitD=null; 
	};
	

	$scope.back= function(){
		backF();
	};
	$scope.show= function(index){
		$scope.twittsHide=true;
		$scope.descriptionHide=false;
		$scope.buttonHide=false;
		$scope.twitD= $scope.twitters[index];
	};
	ajaxCalls.getHome( function (data) {
		$scope.twitters= data.data;
		//console.log($scope.twitters[0]);
		//console.log($scope.twitters);
	});

	geoLocalisation.getUserCoords( function (geoLoc) {
			
			$rootScope.latitude= geoLoc.coords.latitude;
			$rootScope.longitude= geoLoc.coords.longitude;
			//console.log($scope.latitude, ' , ', $scope.longitude);

					
		});	


} ]);