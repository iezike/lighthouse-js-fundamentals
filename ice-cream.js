const iceCreamFlavours = ["chocolate", "vanilla", "cookies and cream", "rocky road", "strawberry"];
console.log(iceCreamFlavours);
let iceCreamAdd = function(iceCreamFlavour){
   iceCreamFlavour.push("root beer");
  //var iceCreamLength = (iceCreamAdd(iceCreamFlavours)).length;
  return iceCreamFlavour
}
console.log(iceCreamAdd(iceCreamFlavours));
console.log(iceCreamFlavours[0]);
console.log(iceCreamAdd(iceCreamFlavours)[5]);
console.log(iceCreamFlavours.length);