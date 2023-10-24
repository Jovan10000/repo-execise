/** 

Write a program that calculates the sum of positive elements in the array.
Input array: [3, 11, -5, -3, 2]
Output: 16  */

var array = [3, 11, -5, -3, 2];
var sum = 0;

for (var i = 0; i < array.length; i++) {
    if (array[i] >= 0){
         sum += array[i]
    }
}
console.log(sum);

var array1 = [1,2,3,4,5,6]
var array2 = [7,8,9,10]
var novi = []
for (var i = 0; i < array1.length + array2.length; i++) {
    if (i < array1.length) {
        novi.push(array1[i])
    }
    else {
        novi.push(array2[i - array1.length])
    }
}
console.log(novi);''