var number = 100;
while( number <= 200){
  number%3 === 0 && number % 4===0? console.log("LoopyLighthouse"): number % 4 ===0? console.log("Lighthouse") : number % 3 ===0? console.log("Loopy"): console.log(number)
  number = number + 1
}