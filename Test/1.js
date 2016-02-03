

You can require any js file, you just need to declare what do you want to expose.

// tools.js
// ========
module.exports = {
  foo: function () {
    // whatever
  },
  bar: function () {
    // whatever
  }
};

var zemba = function () {
}

And in your app file:

// app.js
// ======
var tools = require('./tools');
console.log(typeof tools.foo); // => 'function'
console.log(typeof tools.bar); // => 'function'
console.log(typeof tools.zemba); // => undefined

