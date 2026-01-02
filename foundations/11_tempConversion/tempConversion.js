const convertToCelsius = function(f) {
  return Math.round((f - 32) * 5 / 9, 1);
};

const convertToFahrenheit = function(c) {
  return Math.round((c * 1.8) + 32, 1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
