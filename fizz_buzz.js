var numbers = [];

for (var i = 0; i < 20; i++) {
  numbers.push(i + 1);
}
var getFizzBuzz = function (num) {
  if (num % 15 === 0) return 'FizzBuzz';
  if (num % 3 === 0) return 'Fizz';
  if (num % 5 === 0) return 'Buzz';
  return num;
};

numbers.forEach(function(num) {
  console.log(getFizzBuzz(num));
;});
