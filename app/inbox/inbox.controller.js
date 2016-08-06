(function() {
    angular.module('app')
        .controller('InboxController', InboxController);

    InboxController.$inject = ['MailService'];
    function InboxController( mailSvc) {
        var vm = this;
        vm.sideMenuLinks = [
            'InboxSML1', 'InboxSML2', 'InboxSML3'
        ]

        mailSvc.getMail().then(function(response) {
            vm.mails = response;
        })
    }
})()
