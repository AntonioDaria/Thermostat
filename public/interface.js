

$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();

  $('#temperature-up').click(function() {
    thermostat.up();
    updateTemperature();
  });

  $('#temperature-down').click(function() {
    thermostat.down();
    updateTemperature();
  });

  $('#temperature-reset').click(function() {
    thermostat.resetTemperature();
    updateTemperature();
  });

  $('#powersaving-on').click(function() {
    thermostat.switchPowerSavingModeOn();
    $('#power-saving-status').text('on')
    updateTemperature();
  })

  $('#powersaving-off').click(function() {
    thermostat.switchPowerSavingModeOff();
    $('#power-saving-status').text('off')
    updateTemperature();
  })

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
    $('#indicator').attr('class', thermostat.energyUsage());
    $('#tempHeading').attr('class', thermostat.energyUsage());
    $('#temperature').attr('class', 'text-' + thermostat.energyUsage());
  };

  var weather = new Weather();
  $('#submit-city').click(function(){
    weather.getCityTemperature($('#current-city').val());
  })
  $('#save').click(function(){
    $.post("/", function(data) {
      
    })
  })

});
