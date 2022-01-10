const z=require('prompt-sync')(); 
const x=new Promise(function(a,b){if(z("say something to enter one of the (currently) 2 branches : ")==="hi"){a("value of the first branch. this argument can be empty as well");}else{b();}});

x.then(f=>console.log("since you said hi, you entered the first (then) branch\t",f)).catch(function(){console.log("since you said something else, you entered a definite catch branch. there could have been more then branches...");}).finally(function(){console.log("this is a finally branch");});
console.log("the second time..");
x.then(f=>console.log(f, "this is the second time...")).catch(function(){console.log("this is the catch call of the second time..");}).finally(function(){console.log("this is the finally call of the second time");});