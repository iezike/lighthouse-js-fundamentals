const howManyHundreds = function(num){
  let result = (num - (num % 100)) / 100;
  return result;
}
console.log(howManyHundreds(10002));