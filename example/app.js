(function() {
	angular.module('app', ['gm.affixHeader', 'ui.scrollpoint'])
	.run(function($rootScope) {
		$rootScope.data = [];

		for(var i = 0; i < 100; i++) {
			$rootScope.data.push(Math.random());
		}
	});
})();