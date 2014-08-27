/**
 * @desc calendar directive that renders a calendar
 * @file calendar.directive.js
 * @example <calendar date="myDate"></calendar>
 */

/* global CalendarRange:false */
(function () {
  angular
    .module('calendarDemoApp')
    .directive('calendar', calendar);

  /* @ngInject */
  function calendar (CalendarRange) {

    // Setup directive object and scope
    var directive = {
      link: link,
      templateUrl: './js/partials/calendar/calendar.template.html',
      restrict: 'E',
      scope: {
        calendarDate: '=date'
      }
    };

    return directive;

    /* @ngInject */
    function link (scope, element, attrs) {

      // Set initial range
      scope.range = CalendarRange.getMonthlyRange(scope.calendarDate);
      scope.currentMonth = scope.calendarDate.getMonth();
      // Watch for changes
      scope.$watch(function () {
        return scope.calendarDate;
      }, function(newDate, oldDate) {
        if ( newDate !== oldDate ) {
          scope.range = CalendarRange.getMonthlyRange(newDate);
          scope.currentMonth = newDate.getMonth();
        }
      });

    }
  }

})();