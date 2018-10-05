'use strict'

function Weather() {

}

Weather.prototype.getCityTemperature = function (city) {
  var url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric";
console.log(url);
  $.get(url, function(data) {
      $('#current-temperature').text(data.main.temp);
  });
};
