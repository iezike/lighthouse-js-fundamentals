function isOdd(number){
  var result = false
  if(number % 2 === 1){
    result = true
  } else{
    result = false
  }
  return result;
}

console.log(isOdd(10));