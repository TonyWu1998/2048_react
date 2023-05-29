//Calculate the result of one single move.
//Input: board: A 4*4 array. Containing 0/2/4/8/16/32...
//       direction: A string that can be "ArrowLeft"/
//                  "ArrowDown"/"ArrowUp"/"ArrowRight"
//Output: Result array.
import { cloneDeep } from "lodash";

function boardMove(board, direction) {
  var boardCopy = cloneDeep(board);
  var itStart; //iteration start point
  var itDir; //iteration direction
  //var nextVac;

  if (direction === "ArrowUp" || direction === "ArrowDown") {
    //iterate by col
    if (direction === "ArrowUp") {
      itStart = 0;
      itDir = 1;
    } else {
      itStart = 3;
      itDir = -1;
    }
    for (var j = 0; j < 4; ++j) {
      var merged = [false, false, false, false];
      for (var i = itStart, nextVac = itStart; ; i += itDir) {
        if (boardCopy[i][j] !== 0) {
          var temp = boardCopy[i][j];
          boardCopy[i][j] = 0;
          if (
            nextVac !== itStart &&
            temp === boardCopy[nextVac - itDir][j] &&
            merged[nextVac - itDir] === false
          ) {
            //first block not merge, merge once for every col, merge iff equal
            merged[nextVac - itDir] = true;
            boardCopy[nextVac - itDir][j] *= 2;
          } else {
            //console.log([nextVac, j]);
            boardCopy[nextVac][j] = temp;
            nextVac += itDir;
          }
        }
        if (i === 3 - itStart) break;
      }
    }
  } else {
    //iterate by row
    if (direction === "ArrowLeft") {
      itStart = 0;
      itDir = 1;
    } else {
      itStart = 3;
      itDir = -1;
    }
    for (i = 0; i < 4; ++i) {
      merged = [false, false, false, false];
      for (j = itStart, nextVac = itStart; ; j += itDir) {
        if (boardCopy[i][j] !== 0) {
          temp = boardCopy[i][j];
          boardCopy[i][j] = 0;
          if (
            nextVac !== itStart &&
            temp === boardCopy[i][nextVac - itDir] &&
            merged[nextVac - itDir] === false
          ) {
            //first block not merge, merge once for every col, merge iff equal
            merged[nextVac - itDir] = true;
            boardCopy[i][nextVac - itDir] *= 2;
          } else {
            boardCopy[i][nextVac] = temp;
            nextVac += itDir;
          }
        }
        if (j === 3 - itStart) break;
      }
    }
  }
  return boardCopy;
}

//Randomly add 2/4s at empty area
//Input: board: A 4*4 array.
//Output: Result array.
//        Return null if no valid area(Game over).
function randomAdd(board) {
  var newNumber;
  var a = Math.floor(Math.random() * 9);
  if (a < 8) newNumber = 2;
  else newNumber = 4;

  var vacancy = [];
  for (var i = 0; i < 4; ++i) {
    for (var j = 0; j < 4; ++j) {
      if (board[i][j] === 0) {
        vacancy.push([i, j]);
      }
    }
  }

  var len = vacancy.length;
  if (len === 0) return board;
  var p = vacancy[Math.floor(Math.random() * len)];
  board[p[0]][p[1]] = newNumber;
  return board;
}

export { boardMove, randomAdd };
