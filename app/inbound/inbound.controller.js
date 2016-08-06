(function() {
    angular.module('app')
        .controller('InboundController', InboundController);

    InboundController.$inject = ['MailService'];
    function InboundController(mailSvc) {
        var vm = this;
        vm.sideMenuLinks = [
            "InboundSML1", "InboundSML2", "InboundSML3"
        ]

        mailSvc.getRecievedMail().then(function(response) {
            vm.mails = response;
        })
    }
})()
