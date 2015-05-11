/* http://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php
 * This is a JavaScript Scratchpad.a
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

var d = new Date();
console.log("Today is : "+ d.getDay());
console.log("Current Time is : " + d.getHours()+":" + d.getMinutes()+ ":" + d.getSeconds());
//window.print();
var aTri = function(a,b,c){
  var p = (a + b + c)/2;
  var ans = Math.sqrt(p*(p-a)*(p-b)*(p-c));
  return ans;
};

console.log(aTri(5,6,7));

var reverse = function(string){
  var firstLetter = string.charAt(0);
  var result = string;
  for(var i=0; i < string.length;i++){
    var lastLetter = string.slice(string.length - 1);
    string = string.slice(string.length - 1);
    //console.log(lastLetter);
    string = lastLetter + string.substring(string.indexOf(firstLetter, (string.length - 1))); 
    
  }
   return string;
  
}
var str = "abcd";
//console.log(str.slice(0,0));
//console.log(reverse('abcd'));
//console.log(reverse("abcd")); come back

var isLeapYear = function(year){
  if(year % 4 == 0){
    return true;
  }
  else{
    return false;
  }
  
}
console.log(isLeapYear(4));

var findSunday = function(start, end){
  for(var year = start; year <= end; year++){
    var dt = new Date(year, 0, 1 );
    if(dt.getDay() == 0){
      console.log(year);
    }

  }
};
findSunday(2014,2050);// understand Date() better


var guesser = function(){
  var number = Math.floor(Math.random() * 10)
  
  if(prompt(number) == number){
    alert('right');
  }
  else{
    alert("wrong");
  }
};

//guesser(); works but annoying

var dayLeftXmas = function(date){
  var xmas = new Date(date.getFullYear(), 11, 25);
  var res = xmas - date;
  return res
};

//console.log(dayLeftXmas(d)); doesnt work yet learn date better

var mult= function(){
    var first = parseInt(document.getElementById("number1").value, 10);
    var second = parseInt(document.getElementById("number2").value, 10);
    document.getElementById("result").innerHTML =  first * second;
    
};

var divi = function(a,b){
    var first = parseInt(document.getElementById("number1").value, 10);
    var second = parseInt(document.getElementById("number2").value, 10);
    document.getElementById("result").innerHTML =  first / second;
};

var doOperation = function(operator){//this solution did not work: said that "operator" was not a function
    var first = document.getElementById("number1").text;
    var second = document.getElementById("number2").text;
    var res = operator(first, second);
    document.getElementById("result").innerHTML = res;
};

var tempConvert = function(temp, toType){
    if (toType == "f"){
        temp = ((temp * 9)/5) + 32;
        return temp;   
    
    }
    else if (toType == "c"){
        temp = ((temp - 32) * 5) / 9; //- 32;//the problem is here
        return temp;
    }
    else{
        console.log("second param must be 'c' or 'f'");
    }
    
   
}

console.log(tempConvert(98.6,"c"));

console.log(window.location.href);













