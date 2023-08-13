module.exports = function (date) {
  return `${date.toDateString()} at ${date.toLocaleTimeString()}`;
};
