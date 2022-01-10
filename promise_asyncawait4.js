const x=require('prompt-sync')(); async function px(){ if(parseInt(await x("say 4 : "))===4){console.log("its four"); return ("its four or return a promise for the thenning to occur?".toUpperCase());}else{console.log("try returning 'not four' "); return ("not four".toUpperCase());}}

px().then(function(r){console.log(r)}).catch(function(r){console.log(r);}).finally(function(){console.log("final clause");});
console.log("hello keyboard");