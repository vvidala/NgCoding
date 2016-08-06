(function() {
    angular.module('app')
        .controller('InboundController', InboundController);

    InboundController.$inject = [];
    function InboundController() {
        var vm = this;
        vm.text = 'This is inbound';
    }
})()
