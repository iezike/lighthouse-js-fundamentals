function isOdd(number){
  var result = false
  if(number % 2 !== 0){
    result = true
  } else{
    result = false
  }
  return result;
}

console.log(isOdd(7));