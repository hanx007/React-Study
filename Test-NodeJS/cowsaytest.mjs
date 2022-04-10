// var cowsay = require("cowsay");-commonjs module
import cowsay from 'cowsay'; //ecmascript module
console.log(
  cowsay.say({
    text: "I'm a moooodule",
    e: 'oO',
    T: 'U '
  })
);
