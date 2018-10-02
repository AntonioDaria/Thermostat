'use strict';

function Thermostat() {
  this.temperature = 20
  this.MINIMUM_TEMPERATURE = 10;
  this.powerSavingMode = true;
}


Thermostat.prototype.up = function () {
  this.temperature += 1;
};

Thermostat.prototype.down = function () {
  // this.temperature -= 1;
  if(this.temperature > this.MINIMUM_TEMPERATURE) {
    this.temperature -= 1;
  }

};

Thermostat.prototype.isPowerSavingModeOn = function () {
  return this.powerSavingMode === true;
};

Thermostat.prototype.switchPowerSavingModeOff = function () {
  return this.powerSavingMode = false;
};

Thermostat.prototype.switchPowerSavingModeOn = function () {
  return this.powerSavingMode = true;
};
