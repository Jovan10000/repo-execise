/*

function findsMax(array) {
    var max = -Infinity;
    for (var i = 0; i < array.length; i++) {
    if (array[i] > max) {
    max = array[i] 
    }
}
return max;
}
console.log(findsMax([1,2,3,4,5,6,7,100]))

*/
/*
function findElement(array, element = 4) {
    var foundindex = -1
    var foudelement;
    for (var i = 0; i < array.length; i++) {
        if (array[i] === element) {
            foundindex = i; 
            foudelement = array[i];
        }
    
    }
    
    console.log("found element is: " + foudelement + "idex is:" + foundindex)
}


console.log(findElement([1123,44,5,6,77,4,],5))

*/
/*
function number(numbber) {
    if(numbber >= 100 && numbber <= 999) {
        console.log("number is 3 digital")
    }
    if(typeof numbber === "string") {
        console.log("input must be number")
    }
    else {
        console.log("number :" +  numbber + ": is not 3 digtal")
    }
    return numbber
}
number("jjsjdjd") 
*/
/*
function arithmettic(num1,num2,num3,num4) {
    var sum = num1 + num2 + num3 + num4
    var mean = sum / 4
   
    console.log("avarage number is :" + mean)
    return mean;
}

console.log(arithmettic(10,20,30,40))
*/
/*
function drawSquare(size) {
    if (size < 2) {
      console.log("Size should be at least 2 to draw a square.");
      return;
    }
  
    for (let i = 1; i <= size; i++) {
      let row = "";
      for (let j = 1; j <= size; j++) {
        if (i === 1 || i === size || j === 1 || j === size) {
          // Draw * for the first and last rows, and the first and last columns
          row += "*";
        } else {
          // Draw a space for the inner rows and columns
          row += " ";
        }
      }
      console.log(row);
    }
  }
  
  // Example usage with a square of size 5
  drawSquare(5);
  
*/
var array = [123,234,567,789,111,]
function broj(broj2) {
  var drugi = array + ""
 var counter = 0;
  for (var i = 0; i < drugi.length; i++) {
   for (var j = 0; i < drugi[i].length; j++) {
      if(drugi[i][i].length  === 1 || drugi[i][i] === 1 )
      counter++
   }
   return counter
  }
 
}
console.log(broj([123,456,778,900,751,123]))



