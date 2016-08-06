(function() {
    angular.module('app')
        .controller('InboxController', InboxController);

    InboxController.$inject = [];
    function InboxController() {
        var vm = this;
        vm.text = 'This is inbox';
    }
})()
