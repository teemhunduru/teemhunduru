/** create a new AngularJS app instance **/
var app = angular.module ( 'My-Forum', [ 'ngRoute' ] );

app.config ([ 
  '$routeProvider', function ( $routeProvider ) {

		/** DEFAULT APP MODULE / PAGE - this will load when the user first loads the app **/
		var defaultRoute = '/home';

		/** ROUTE CONFIGURATION - WHEN USER ACCESSES THE FOLLOWING LINKS, LOAD THE APPROPRIATE VIEWS / PAGES **/
		$routeProvider
		  
		  /** FORUM MODULE **/
			.when (
				'/forum', {
					templateUrl: 'scripts/modules/forum/forum-view.html',
					controller: 'ForumController'
				}
			)
			
			/** FORUM MODULE **/
			.when (
				'/home', {
					templateUrl: 'scripts/modules/home/home-view.html',
					controller: 'HomeController'
				}
			)
			
			/** FORUM MODULE **/
			.when (
				'/profile', {
					templateUrl: 'scripts/modules/profile/profile-view.html',
					controller: 'ProfileController'
				}
			)
			
				/** FORUM MODULE **/
			.when (
				'/about', {
					templateUrl: 'scripts/modules/about/about-view.html',
					controller: 'AboutController'
				}
			)
			
			/**
			// NEW MODULE AngularJS ROUTE TEMPLATE
			// replace <MODULE> with the name of the new module / page
			// make sure you add a MENU LINK in index.html once you add a new module
			.when (
				'/MODULE', {
					templateUrl: 'scripts/modules/<MODULE>/<MODULE>-view.html',
					controller: '<MODULE>Controller' // controller name must be CamelCase
				}
			)
			**/
			
			/** IF THE USER REQUESTS AN UNRECOGNISED OR NO LINK, REDIRECT THEM TO THE DEFAULT ONE **/
			.otherwise (
				{
					redirectTo: defaultRoute
				}
			);
	}
]);

/** code to run against the AngularJS app instance **/
app.run(function($rootScope, $location) {
    
  /** code to run when a new page has just been requested **/
  $rootScope.$on('$routeChangeStart', function(angularEvent, next, current) {
    
    // oputput parameter values to console for debug purposes
    //console.log('$routeChangeStart');
    //console.log(angularEvent);
    //console.log(next);
    //console.log(current);
    
  });
  
  /** code to run when a new page has just been successfully loaded **/
  $rootScope.$on('$routeChangeSuccess', function (angularEvent, current, previous) {
    
    // oputput parameter values to console for debug purposes
    //console.log('$routeChangeSuccess');
    //console.log(angularEvent);
    //console.log(current);
    //console.log(previous);
    
  });
  
  /** code to run when the requested page could not be loaded **/
  $rootScope.$on('$routeChangeError', function (angularEvent, current, previous, rejection) {

    // oputput parameter values to console for debug purposes
    //console.log('$routeChangeError');
    //console.log(angularEvent);
    //console.log(current);
    //console.log(previous);
    //console.log(rejection);

  });
    
})