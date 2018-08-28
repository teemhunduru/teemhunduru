app.controller ('AboutController', [
	'$scope', function ( $scope )
	{
		  
    /** oputput parameter values to console for debug purposes **/
    console.log('AboutController has loaded.');
    console.log('$scope:', $scope);
		  
    /****** CONTROLLER CODE ******/
    $scope.aboutTitle = 'About Us';

	}
]);