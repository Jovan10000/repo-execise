
/*
     for (var peraMikaZika = 3; peraMikaZika < 9; peraMikaZika++) {
          peraMikaZika -= 0.5;
          console.log(peraMikaZika);
     }
    
        

     var b;
for (var i = 0; i === 3; i++) {
  console.log(b);
}

var i = 20;
 do {
  i = i - 1;
 console.log(i);
 i--;
} while (i > 0);

var suma = 0;
for(var i = 0; i < 5; i+=5){
    suma = suma + i; }
 console.log(suma);


 */
/*
function drawSquare(kocka) {
     if (kocka < 2) {
     console.log("min value is 2 to make sqaure");
     }
     var kocka2 = ""
     for (var i = 1; i <= kocka; i++ ) {
          for(var j = 1; j <= kocka; j++) {
               if (i === 1 || i === kocka || j == 1 || j == kocka ) {
                    kocka2 += "*"
               }
               else {
                    kocka2 += " "
               }

          }
          console.log(kocka2)
     }
}
drawSquare(5)
*/

function lines(values) {
     for (var i = 0; i < values.length; i++) {
          var row = ""
          for (var j = 0; j < values[i]; j++) {
               row += "* "
          }
          console.log(row)
     }
}
var values = [4,2,10]

lines(values)