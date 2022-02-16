const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  
let finalPosition = function(moves){
  let sumNorthSouth = 0;
  let sumEastWest = 0;
  for(let position = 0; position <= moves.length -1; position = position +1) if (moves[position] === "north"){
    sumNorthSouth = sumNorthSouth + 1
  } else if( moves[position] === "south" ) {
    sumNorthSouth = sumNorthSouth - 1
  } else if (moves[position] === "east"){
    sumEastWest = sumEastWest + 1
  } else if (moves[position] === "west") {
    sumEastWest = sumEastWest -1
  }
  return [ sumEastWest,sumNorthSouth ] 
};
console.log(finalPosition(moves));