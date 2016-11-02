var numbers = [];

for (var i = 0; i < 20; i++) {
  numbers.push(i + 1);
}
var getFizzBuzz = function (num) {
  if (num % 15 === 0) return 'FizzBuzz';
};

var getFizz = function(num) {
  if (num % 3 === 0) return 'Fizz';
};

var getBuzz = function(num) {
  if (num % 5 === 0) return 'Buzz';
};

numbers.map(getFizzBuzz).map(getFizz).map(getBuzz).forEach(function(num) {
  console.log(num);
});
