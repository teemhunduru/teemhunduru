app.controller ('ProductController', [
	'$scope', function ( $scope )
	{
		  
    /** oputput parameter values to console for debug purposes **/
    console.log('ProductController has loaded.');
    console.log('$scope:', $scope);
		  
    /****** CONTROLLER CODE ******/
    $scope.productTitle = 'Product Title Here';

	}
]);