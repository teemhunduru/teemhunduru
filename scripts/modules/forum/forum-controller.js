app.controller ('ForumController', [
	'$scope', function ( $scope )
	{
		  
    /** oputput parameter values to console for debug purposes **/
    console.log('ForumController has loaded.');
    console.log('$scope:', $scope);
		  
    /****** CONTROLLER CODE ******/
    $scope.forumTitle = 'Forum Title Here';

	}
]);