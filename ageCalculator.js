var ageCalculator = function(name, yearOfBirth, currentYear){
  let result = "";
  let age = currentYear - yearOfBirth;
  result += name + " is " + age + " years old.";
  return result;
}

console.log(ageCalculator("Ikenna", 1986, 2022));
console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));