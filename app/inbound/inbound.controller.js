(function() {
    angular.module('app')
        .controller('InboundController', InboundController);

    InboundController.$inject = ['$rootScope'];
    function InboundController($rootScope) {
        var vm = this;
        $rootScope.sideMenuLinks = [
            "InboundSML1", "InboundSML2", "InboundSML3"
        ]
    }
})()
