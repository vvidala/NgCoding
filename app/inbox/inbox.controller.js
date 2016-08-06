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
            vm.allmails = response;
            vm.filteredMails = vm.allmails;
            vm.emails = {};
            response.forEach(function(mail) {
                vm.emails[mail.email] = mail.name;
            })
        })

        vm.filterMail = function() {
            vm.filteredMails = vm.allmails.filter(function(mail) {
                var match = true;
                if(vm.search.email && vm.search.email !== mail.email) {
                    match = false;
                }
                if(vm.search.text && mail.content.indexOf(vm.search.text) === -1) {
                    match = false;
                }
                if(vm.search.date && new Date(vm.search.date) === new Date(mail.sent)) {

                }
                return match;
            });
        }
    }
})()
