(function() {
    angular.module('app')
        .controller('OutboundController', OutboundController);

    OutboundController.$inject = ['$rootScope'];
    function OutboundController($rootScope) {
        var vm = this;
        $rootScope.sideMenuLinks = [
            'OutboundSML1', 'OutboundSML2', 'OutboundSML3'
        ]
    }
})()
