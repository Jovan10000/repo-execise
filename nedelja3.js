
/*

function checkString(input) {
    if (typeof input === "string") {
        console.log("input :" + input + ": is string")
        
    } else {
        console.log("input is not a string");
    }
    return input
    }
    
    console.log(checkString("jjdkfjdjfhjg"))
    */
   /*
   function string(input) {
    if(typeof input === "") {
        console.log("string is empty")
    } else {
        console.log("string is not empty")
    }
   }

   console.log(string(""))
   */
/*
   function concat(string , num) {
    var output = ""
    for(var i = 0; i < num; i++) {
        output += string
    }
    return output

   }
   console.log(concat("ab",3))
   */
/*
   function letterCounnt(string) {
    var counter = 0;
    for(var i = 0; i < string.length; i++) {
        counter++
    }
    return counter;
   }
   console.log(letterCounnt("kjjhfgdgs"))
   */
/*
   function letterFinder(string,letter) {
    var foundindex = -1
    for(var i = 0; i < string.length; i++) {
        if (string[i] === letter) {
            foundindex = i
            continue;
        }
    } 

    console.log("found letter :" + letter + ": at " + foundindex )

   }

   letterFinder("jfdhfdhbd","d")
   */
  /*
   function stringToArray(string) {
    var array = []
    for(var i = 0; i < string.length; i++) {
        if (string[i] === " ") {
            array.push(null)
        } else {
            array.push(string[i])
        }
    

    }
    return array
   }
   console.log(stringToArray("jdgdyeirdoeordhf"))
   */

   function nameLastName(name, lastname) {
     var output = ""
     output += name[0]
     output += lastname[0]
     return output;
   }
   console.log( nameLastName("JOVAN" ,"DINCIC"))
   console.log(parseInt('100h'))