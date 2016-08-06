(function() {
    angular.module('app')
        .component('sideMenu', {
            templateUrl: '/app/sidemenu/sidemenu.template.html',
            bindings: {
                links: '='
            }
        })
})();
