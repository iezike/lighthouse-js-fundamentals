const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
let i = 0;
while (i < ingredients.length){
  console.log(ingredients[i]);
i = i + 1;
}

for( let j = 0; j < ingredients.length; j = j+1){
  console.log(ingredients[j]);
}


for( let k = ingredients.length -1 ; k >= 0; k = k-1){
  console.log(ingredients[k]);
}