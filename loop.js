var x = 1;
while (x <= 20/* your stop condition goes here */) {
     x % 3 === 0 && x%5 ===0? console.log("JuliaJames"): x % 3 === 0?  console.log("Julia"): x%5 ===0?  console.log("James"): console.log(x);    // check divisibility
      // print Julia, James, or JuliaJames
    x = x+1  // increment x
  }