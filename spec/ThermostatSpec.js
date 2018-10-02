'use strict';

describe("Thermostat", function(){
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts with a temperature of 20 degrees', function() {
    expect(thermostat.temperature).toEqual(20)
  });

  it('increases temperature using an up function', function() {
    thermostat.up();
    expect(thermostat.temperature).toEqual(21)
  });

  it('decreses temperature using a down function', function() {
    thermostat.down();
    expect(thermostat.temperature).toEqual(19)
  });

  it('sets minimum temperature to 10 degrees', function() {
    for (var i = 0; i < 11; i++) {
      thermostat.down();
    }
    expect(thermostat.temperature).toEqual(10)
  })

  it('has a saving mode on by default', function() {
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });

  it('can switch PSM off', function() {
   thermostat.switchPowerSavingModeOff();
   expect(thermostat.isPowerSavingModeOn()).toBe(false);
  });

  it('can switch PSM back on', function() {
    thermostat.switchPowerSavingModeOff();
    expect(thermostat.isPowerSavingModeOn()).toBe(false);
    thermostat.switchPowerSavingModeOn();
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });

});
