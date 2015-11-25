
App.controller('searchCtrl', [ '$scope', '$rootScope', 'ajaxCalls', function( $scope, $rootScope, ajaxCalls) {
	$rootScope.section= 'search';
	backF();

	$scope.search = function(txt) {
		ajaxCalls.getSearch(txt, function(data){

			$scope.twitts= data.data.statuses;
			//console.log($scope.twitts);
		})
	};

	function backF(){
		$scope.twittsHide=false;
		$scope.descriptionHide=true;
		$scope.buttonHide=true;
		$scope.searchHide=false;
		$scope.twitD=null; 
	};
	

	$scope.back= function(){
		backF();
	};
	$scope.show= function(index){
		$scope.twittsHide=true;
		$scope.descriptionHide=false;
		$scope.buttonHide=false;
		$scope.searchHide=true;
		$scope.twitD= $scope.twitts[index];
	};

} ]);