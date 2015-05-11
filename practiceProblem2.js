//page two of http://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php
console.log("Problem1"); // need to look this one up
console.log("---------------------");
console.log("Problem2");
var stringed = "string";

var isPalindrome = function(string){
    
    for(var i = 0; i < string.length/2; i++){
        //string.remove(string.indexOf(" ")); add for palindromic phrases need internet
        console.log(string[i]);
        console.log(string[(string.length - 1) - i]);
        
        if(string[i] != string[(string.length - 1) - i]){
            return false;
            break;
        
        }         
        
        
    
    }
    return true;

};
console.log(isPalindrome("AbbbA"));
console.log("---------------------");
console.log("Problem3");

var factorial = function(number){
    var result = 1;
    for(var i = number; i > 0; i--){
        result = i * result;
        
    
    }
    return result;
};


//console.log("dog".substr(0,1));
//console.log("dog".substr(0,2));
//console.log("dog".substr(0,3));
//console.log("dog".substr(0,1));
//console.log("dog".substr(0,1));
//console.log("dog".substr(0,1));

var allCombo = function(string){
    var counter = factorial(string.length);
    var results = "";
    for(var i = 0; i < string.length ; i++){
        for(var y = 1; y <= string.length ; y++){
            
            
            console.log(i + ", " + y);
            
            console.log(string[i,y]);
            
        
        }
        
    }
    return results;
};
//console.log(factorial("chuck".length));

//console.log(allCombo("doge"));//will be back for this research range of string
console.log("---------------------");
console.log("Problem 4");

var greatestChar = function(string){
    var result = "";
    for(var i = 0; i < string.length; i++){
        for(var y = 0; y <string.length; y++){
            if(string[i] < string[y]){
                console.log(string[i] + " "+ string[y]);
                break;
            }
            else{
                result = result + string[i];
                console.log(result);
            }
        
        }
        
    }
}

//greatestChar("webmaster"); I am tired
console.log("------------------ \n Problem 5");

var properCase = function(string){
    var result = "";
    result = result + string[0].toUpperCase();
    for(var i = 1; i < string.length; i++){
        if(string[i - 1] == " "){
            result = result + string[i].toUpperCase();
        }
        
        else{
            result = result + string[i];
        }
    }
    return result;

};

console.log(properCase("frog goes to the store"));

console.log("----------------------- \n Problem 6");

var longestWord = function(string){
    var longest = [];
    var word = ""
    //longest.push("hey");
    for(var i = 0; i < string.length; i++){ // this loop converts strings to arrays!!
        if(string[i - 1] == " "){
            //word = word + string[i];
            longest.push(word);
            word = "";
            word = word + string[i];
        }
        
        else if(i == string.length - 1){
            word = word + string[i];
            longest.push(word);
            
        }
        
        else if(string[i] != " "){
            word = word + string[i];
        
        }
        
    }
    console.log(longest);
    var counter = 0;
    
    while(longest.length > 1){
        if(longest[counter].length <= longest[counter + 1].length){
            //console.log(longest[counter].length);
            //console.log(longest[counter +1 ].length);
            longest.pop(longest[counter + 1]);
            counter = -1;
        }
        counter++;
        
    
    }
    console.log(longest);

};
//longestWord("hey there you"); // ugh come back to this with internet
console.log("---------------------");
console.log("Problem 7")

var numVowels = function(string){
    var numberV = 0;
    for(var i = 0; i < string.length; i++){
        //console.log(string[i]);
        if(string[i] == "a" | string[i] == "e" | string[i] == "o" | string[i] == "i" | string[i] == "u"){
            numberV++        
        }
    
    }
    return numberV;

};

console.log(numVowels("abeea"));
console.log("---------------------");

console.log("Problem 8");

var isPrime = function(number){
    var primes = [2];
    
    for(var i = 0; i < (number/2) + 2; i++){
        if(number % primes[i] == 0 && primes[i] != number){
            //console.log(primes[i]);
            return "not prime";
            break;
        }
        else{
            primes.push(primes[i]+1);
            //console.log(primes);
        }
    
    }
    return "yep it is prime"
    

};

console.log(isPrime(59)); // test with more numbers but i think that it is right
console.log("---------------------");
console.log("Problem 9");

var typer = function(thing){
    return typeof(thing);

};

console.log(typer(isPrime));
console.log("---------------------");
console.log("Problem 10");// not sure what an identity matrix is but here goes
var gridMaker = function(number){
    var array = [];
    for(var i = 0; i < number; i++){
        temparray = [];
        for(var y = 0; y < number; y++){
            
            temparray.push(number);
        
        }
        array.push(temparray);
    }
    //array.pop(array[0]);
    return array;
};

console.log(gridMaker(5)); //maybe works, depends on what an identity matrix is
console.log("---------------------");
console.log("Problem 11");

var seconds = function(array){
    res = [];
    for(var i = 0; i < array.length; i++){
        for(var y = 0; y < array.length; y++){
            if(array[i] < array[y]){
                console.log(array[i] + "<" + array[y]);
                
                break;
            }
            else{
                console.log(array[i] + ">" + array[y]);
                //res.push(array[y]);
            
            
            }
        
        
        }
        
    }
    res.push(array[i]);
    return res;
    

};

//console.log(seconds([1,7,2,4,5])); need to research comparison down arrays

console.log("---------------------");
console.log("Problem 12");



var isPerfect = function(number){
    var divisors = [];
    for(var i = number - 1; i>=1; i--){
        if(number % i == 0){
            divisors.push(i);
        }
    }
    
    
    
    if(divisors.reduce(function(a,b){return a+b;}, 0) == number){
        return "its perfect";
    } 
    else{
        return "not perfect";
    }
};

console.log(isPerfect(8128));
console.log("---------------------");
console.log("Problem 13");

var getFactors = function(number){
    var factors = [];
    for(var i = 0; i <= number; i++){
        for(var y = 0; y <= number; y++){
            if(i*y== number){
            
                factors.push(i);
            }
        
        }
    }
    return factors;
};

console.log(getFactors(67));// this works how can it be optimized the 10000 is the largest that works
console.log("---------------------");
console.log("Problem 15");

var toCoins = function(amount, array){
    
}

var power = function(b,n){
    var res = 1;
    for(var i = 0; i < n; i++){
        res = res * b;
    }
    return res;
    
}



console.log(power(2,8));// it works
console.log("---------------------");
console.log("Problem 16");
var uniqueLetters = function(string){
    var res = "";
    for(var i = 0; i < string.length; i++){
        for(var y = 0; y < string.length; y++){
            
        }
    }
    
    return res;

}














