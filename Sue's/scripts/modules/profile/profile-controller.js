app.controller ('ProfileController', [
	'$scope', function ( $scope )
	{
		  
    /** oputput parameter values to console for debug purposes **/
    console.log('ProfileController has loaded.');
    console.log('$scope:', $scope);
		  
    /****** CONTROLLER CODE ******/
    $scope.profileTitle = 'Profile ';

	}
]);