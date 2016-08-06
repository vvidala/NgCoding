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
                controller: 'InboxController as vm'
            })
            .state('inbound', {
                url: "/inbound",
                templateUrl: "/app/inbound/inbound.template.html",
                controller: 'InboundController as vm'
            })
            .state('outbound', {
                url: "/outbound",
                templateUrl: "/app/outbound/outbound.template.html",
                controller: 'OutboundController as vm'
            });
    });
})()
