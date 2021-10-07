const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north'];

function finalPosition(moves) {
  let finalPositionXY = [];
  let xpos = 0;
  let ypos = 0;
  for (const move of moves) {
    switch (move) {
      case 'north':
        ypos +=1;
        break;
      case 'south':
        ypos -= 1;
        break;
      case 'east':
        xpos +=1;
        break;
      case 'west':
        xpos -= 1;
        break;
    }
  }
  finalPositionXY.push(xpos);
  finalPositionXY.push(ypos);
  console.log(finalPositionXY);
}

finalPosition(moves);
