/**
 * Unit test to test the calendar directive
 */

describe('calendar', function() {
  var scope,
    element,
    compiled,
    html;

  beforeEach(module('calendarDemoApp'));
  beforeEach(module('calendar/calendar.template.html'));

  beforeEach(inject(function($rootScope, $compile) {

    // Set the mock HTML
    html = '';
    html += '<calendar date="calendar.calendarDate>';
    html += '</calendar>';

    // Create a new scope
    scope = $rootScope.$new();

    // Compile the HTML
    compiled = $compile(html);

    // Add the compiled html to the scope
    element = compiled(scope);

    // Run digest cycle to apply the changes
    scope.$digest();

  }));

  it('should render the element correctly', function(){

    // Expect to find a div with the the class calendar-grid
    expect(element.children('.calendar-grid').length).toBe(1);
  });

});