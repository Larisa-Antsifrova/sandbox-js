let direction = 'up';
let currentFloor = 0;

let upList = [];
let downList = [];

function insideButtonPush(floor) {
  console.log(`insideButtonPush( ${floor} )`);
  if (floor > currentFloor) {
    upList.push(floor);
  } else if (floor < currentFloor) {
    downList.push(floor);
  } else if (floor === currentFloor) {
    //do nothing. this doesnt need to be added since we're already on that floor
  }
}

function outsideButtonPush(floor, direction) {
  console.log(`outsideButtonPush( ${floor}, ${direction} )`);
  if (direction === 'up') {
    upList.push(floor);
  } else if (direction === 'down') {
    downList.push(floor);
  } else if (floor === currentFloor) {
    //do nothing. this request can be thrown away since we're already on that floor
  }
}

function printStatus() {
  console.log('uplist:' + upList.toString());
  console.log('downList:' + downList.toString());
}

function anyAboveCurrentFloor(pArray) {
  for (let i = 0; i < pArray.length; i++) {
    if (pArray[i] > currentFloor) {
      return true;
    }
  }
  return false;
}

function anyBelowCurrentFloor(pArray) {
  for (let i = 0; i < pArray.length; i++) {
    if (pArray[i] < currentFloor) {
      return true;
    }
  }
  return false;
}

//
//

//find the lowest item in a list
//return the INDEX to it
//you will need to implement more functions like this
//think about refactoring the code so you don't write several almost identical functions
//TODO
function lowestAboveCurrentFloor(pArray) {
  const lowestItem = Math.min(...pArray);
  return pArray.findIndex(el => el === lowestItem);
}

function highestBelowCurrentFloor(pArray) {
  const highestItem = Math.max(...pArray);
  return pArray.findIndex(el => el === highestItem);
}

//IMPLEMENT THIS
function goToNextDestination() {
  console.log('goToNextDestination()');
  let returnThis = 0; //default go to ground floor

  //ONLY THE ROUTING FOR DIRECTION===UP IS DONE FOR NOW
  //YOU DON'T NEED TO WORRY ABOUT ROUTING FOR DIRECTION===DOWN
  if (direction === 'up') {
    //look in upList
    //if there are any requests in upList > currentFloor
    //remove and return the LOWEST number > currentFloor
    if (anyAboveCurrentFloor(upList)) {
      console.log('anyAboveCurrent Floor');
      let index = lowestAboveCurrentFloor(upList);
      console.log('lowestAboveCurrentFloor index is ' + index + ' value is ' + upList[index]);
      upList.splice(index, 1);
      console.log('uplist looks like this now:' + upList.toString());
      return returnThis;
    }

    //else if there’s any items in the downList > currentFloor
    //change direction to Down
    //return the highest one
    if (Math.max(...downList) > currentFloor) {
      console.log('any in downList > currentFloor');
      direction = 'down';
      return downList[highestBelowCurrentFloor(downList)];
    }
    //if neither condition filled there’s no requests above us. Means we need to switch direction
    direction = 'down';

    //if there’s any requests in the downList
    //go to the HIGHEST one below us
    //set direction to down
    //else if there’s any requests in the upList (would be BELOW us)
    //got to the LOWEST one below us
    //keep direction as up

    //if we get here there’s no requests
    //go to ground floor
    //keep direction as “up”
  } else if (direction === 'down') {
    //DON'T WORRY ABOUT THIS USE CASE FOR NOW
  }
}

//test code
insideButtonPush(1);
outsideButtonPush(10, 'down');
outsideButtonPush(5, 'up');
insideButtonPush(9);
printStatus();
goToNextDestination();
goToNextDestination();
goToNextDestination();
goToNextDestination();
