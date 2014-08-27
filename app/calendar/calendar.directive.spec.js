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

    var today = new Date(),
        year = today.getFullYear(),
        month = today.getMonth();

    $rootScope.date = new Date(year, month, 1);

    // Set the mock HTML
    html = '';
    html += '<calendar date="date">';
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
    // Expect calendar days to be there
    expect(element.children('.calendar-grid').children('.calendar-day').length).toBeGreaterThan(1);
  });

});