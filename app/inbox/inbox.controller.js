(function() {
    angular.module('app')
        .controller('InboxController', InboxController);

    InboxController.$inject = ['$rootScope'];
    function InboxController($rootScope) {
        var vm = this;
        $rootScope.sideMenuLinks = [
            'InboxSML1', 'InboxSML2', 'InboxSML3'
        ]
    }
})()
