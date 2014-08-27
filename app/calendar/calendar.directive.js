/**
 * @desc calendar directive that renders a calendar
 * @file calendar.directive.js
 * @example <calendar></calendar>
 */

/* global CalendarRange:false */
(function () {
  angular
    .module('calendarDemoApp')
    .directive('calendar', calendar);

  function calendar () {

    var directive = {
      link: link,
      templateUrl: './js/partials/calendar/calendar.template.html',
      restrict: 'E',
      scope: {
        calendarDate: '=date'
      }
    };

    return directive;

    function link (scope, element, attrs) {

    }
  }

})();