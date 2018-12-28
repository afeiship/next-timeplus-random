var nx = require('next-js-core2');
require('../src/next-timeplus-random');

test('create 10 timestemap min is first/ max is last; test 100 times', () => {
  var times = 5;
  for (let i = 0; i < times; i++) {
    var rs = nx.timeplusRandom(10);
    var first = rs[0];
    var last = rs[rs.length - 1];

    console.log(rs, Math.max.apply(null, rs), Math.min.apply(null, rs));

    expect(Math.min.apply(null, rs)).toBe(first);
    expect(Math.max.apply(null, rs)).toBe(last);
  }
});
