function returnFirstTwoDrivers(array) {
  return array.slice(0, 2)

}

function returnLastTwoDrivers(array) {
    return array.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiply){
    return function (fare){
        return multiply * fare
    }
}

function fareDoubler(fare){
    return (fare * 2)
}

function fareTripler(fare){
    return (fare *3)
}

function selectDifferentDrivers(arrayOfDrivers, selectingDrivers ){
    return selectingDrivers(arrayOfDrivers)

}