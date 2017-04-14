(function() {
    'use strict';

    angular
        .module('app.landing')
        .controller('LandingController', LandingController);

    LandingController.$inject = ['servicesFactory', 'vehicleTypeFactory', '$stateParams'];

    /* @ngInject */
    function LandingController(servicesFactory, vehicleTypeFactory, $stateParams) {
        var vm = this;
        vm.estimate = function(){
          vm.price = (vm.selectedService * vm.selectedVehicle).toFixed(2);
        }

        activate();

        function activate() {
            vehicleTypeFactory
                .getAll()
                .then(function(data) {
                    console.log(data);
                    vm.vehicleTypes = data;
                })
                .catch(function(error) {
                    console.error(error);
                });
            servicesFactory
                .getAll()
                .then(function(data) {
                    console.log(data);
                    vm.services = data;
                })
                .catch(function(error) {
                    console.error(error);
                });
        }
    }
})();
