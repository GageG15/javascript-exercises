const convertToCelsius = function(f) {
  let cels = (f - 32) * (5/9);
  cels = cels.toFixed(1);
  return Number(cels);
};

const convertToFahrenheit = function(c) {
  let fahr = (c * (9/5) + 32);
  fahr = fahr.toFixed(1);
  return Number(fahr);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
