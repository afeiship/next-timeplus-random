(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');

  nx.timeplusRandom = function(inLength, inStep) {
    var step = inStep || 10;
    var result = [];
    var timestamp = +new Date();

    while (result.length < inLength) {
      if (result.indexOf(timestamp) > -1) {
        timestamp += (Math.random() * step) >> 0;
      } else {
        result.push(timestamp);
      }
    }
    return result;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.timeplusRandom;
  }
})();
