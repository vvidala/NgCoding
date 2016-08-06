(function() {
    angular.module('app')
        .controller('OutboundController', OutboundController);

    OutboundController.$inject = [];
    function OutboundController() {
        var vm = this;
        vm.text = 'This is outbound';
    }
})()
