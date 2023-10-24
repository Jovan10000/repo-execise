function mathReverseNumber(input){
        var outputReversed = 0;
        while(input >= 1) {
            var cifraJedinice = input % 10;
            input -= cifraJedinice;
         input /= 10;
           outputReversed = (outputReversed * 10) + cifraJedinice;
        }
    
        return outputReversed;
     }
 console.log(mathReverseNumber(123))
    