/** Write a program that finds the first element larger than minimum and prints out its value.
Input array: [4, 2, 2, -1, 6]
Output: 2  */

/** 
var home = [4, 2, 2, -1, 6];
var min = Infinity;
var secondMin = Infinity;

for (var i = 0; i < home.length; i++) {
    if (home[i] < min){
        secondMin = min;
        min = home[i];
    }

    else if (home[i] < secondMin && home[i] !== min) {
        secondMin = home[i];
    }
}
console.log(min, secondMin); */

