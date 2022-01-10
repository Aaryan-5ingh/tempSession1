const z=require('prompt-sync')(); 
let yy=parseInt(z("enter 4: "));
const x=new Promise(function(a,b){if(yy===2*2){a("hi");}else{b("bye");}});

console.log("hello 1");

x.then(function (r){console.log(r+r);}).catch(function (r){console.log(r+r);}).finally(function(){console.log("finally clause of code");});

yy++; console.log('sync yy plused',yy);
(async function(){try{ yy++;console.log("inside aynsc iife");const yp=await x; console.log((yp+yp).toUpperCase(),'upper case for the iife, as a marker');}catch(r){console.log((r+r).toUpperCase(),'upper case for the iife, as a marker');}})()

yy--; console.log('sync yy minused',yy);

console.log('hello 2');
