(function() {
    var app = angular.module('app', ['ui.router']);

    app.config(function($locationProvider, $stateProvider, $urlRouterProvider) {
        // For any unmatched url, redirect to /state1
        $urlRouterProvider.otherwise("/inbox");
        //$locationProvider.html5Mode(true);

        // Now set up the states
        $stateProvider
            .state('inbox', {
                url: "/inbox",
                templateUrl: "/app/inbox/inbox.template.html",
                controller: function($scope) {
                    $scope.items = ["A", "List", "Of", "Items"];
                }
            })
            .state('inbound', {
                url: "/inbound",
                templateUrl: "/app/inbound/inbound.template.html",
                controller: function($scope) {
                    $scope.things = ["A", "Set", "Of", "Things"];
                }
            })
            .state('outbound', {
                url: "/outbound",
                templateUrl: "/app/outbound/outbound.template.html",
                controller: function($scope) {
                    $scope.things = ["A", "Set", "Of", "Things"];
                }
            });
    });
})()
