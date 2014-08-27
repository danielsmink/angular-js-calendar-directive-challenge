/**
 * Calendar directive demo controller
 */

/* global CalendarRange:false */
(function() {
  angular
    .module('calendarDemoApp')
    .controller('calendarDemo', calendarDemo);

  /* @ngInject */
  function calendarDemo ($scope) {
    /* jshint validthis: true */
    var vm = this,
      today = new Date(),
      year = today.getFullYear(),
      month = today.getMonth(),
      years = [],
      past = year - 20,
      future = year + 20;

    // Create initial date object
    vm.date = {
      year: year,
      month: month
    };

    // Set initial value
    vm.calendarDate = new Date(vm.date.year, vm.date.month, 1);

    // When something changes in the date object change the calendarDate that we pass to the directive
    $scope.$watchCollection(function () {
      return vm.date;
    }, function(newDate, oldDate) {
      if ( newDate !== oldDate ) {
        vm.calendarDate = new Date(vm.date.year, vm.date.month, 1);
      }
    });

    // Array of months
    vm.months = ('january,february,march,april,' +
    'may,june,july,august,' +
    'september,october,november,december').split(',');

    // Build array of years (20 years in the past and 20 years in the future)
    for(var i=past;i<=future;i++) {
      years.push(i);
    }

    vm.years = years;

    return vm;
  }
})();