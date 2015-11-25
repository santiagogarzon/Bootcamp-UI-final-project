
App.controller('searchCtrl', [ '$scope', '$rootScope', 'ajaxCalls', function( $scope, $rootScope, ajaxCalls) {
	$rootScope.section= 'search';

	$scope.search = function(txt) {
		ajaxCalls.getSearch(txt, function(data){

			$scope.twitts= data.data.statuses;
			console.log($scope.twitts);
		})
	};


} ]);