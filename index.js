// Code your solution in this file!
function distanceFromHqInBlocks(start) {
    return  Math.abs(start - 42);
}

function distanceFromHqInFeet(start) {
  let blocks = distanceFromHqInBlocks(start);
  return blocks * 264;
}

function distanceTravelledInFeet(destination, start) {
    return Math.abs((destination - start)* 264)
}

function calculatesFarePrice(start, destination) {
    if (distanceTravelledInFeet <= 400) {
        return 0
    } else if (distanceTravelledInFeet > 400 && distanceTravelledInFeet <= 2000) {
        return (Math.abs(destination - start)* 0.02)
    } else if (distanceTravelledInFeet > 2000 && distanceTravelledInFeet < 2500) {
        return 25
    } else {
        return 'cannot travel that far'
    }
}