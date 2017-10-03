var locations = []; // this array will hold your objects

// object constructor
var Region = function (state, revenue, locationCount, averageRevenue) {
    this.state = state;
    this.revenue = revenue;
    this.locationCount = locationCount;
    this.averageRevenue = function () {
        var avg = this.revenue/this.locationCount;
        return avg;

    };

};


// object instances
var Illinois = new Region ('IL', 5000, 12);
var Minnesota = new Region ('MN', 300, 3);
var Nevada = new Region ('NV', 25000, 1);

// push object instances to locations array
locations.push(Illinois, Minnesota, Nevada);


// DO NOT MODIFY THIS CODE
$(document).ready(function () {
  locations.forEach(function (element, index) {
    var $li = $('<li></li>');
    $li.append('<span>' +  element.state + '</span>');
    $li.append('<span>' +  element.revenue + '</span>');
    $li.append('<span>' +  element.locationCount + '</span>');
    $li.append('<span>' +  element.averageRevenue() + '</span>');
    $('ol').append($li);
  });
});
