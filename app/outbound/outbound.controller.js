(function() {
    angular.module('app')
        .controller('OutboundController', OutboundController);

    OutboundController.$inject = ['MailService'];
    function OutboundController(mailSvc) {
        var vm = this;
        vm.sideMenuLinks = [
            'OutboundSML1', 'OutboundSML2', 'OutboundSML3'
        ]

        mailSvc.getSentMail().then(function(response) {
            vm.mails = response;
        })
    }
})()
