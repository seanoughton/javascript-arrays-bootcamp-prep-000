var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array,element){
  newArray = [element ... array]
  return array
}

function destructivelyAddElementToBeginningOfArray(array,element) {
 array.unshift(elment)
 return array 
}