/*const x=require("readline");
const y=x.createInterface({input:process.stdin,output:process.stdout});
process.exit();*/

const x=require("readline").createInterface({input:process.stdin,output:process.stdout}); 
const g=new AbortController(); /*console.log(g); process.exit();*/

/*since the AbortController instance is a constant, its property, .signal will also be constant. so const h=g.signal will be a redundancy  and long-handedness. THIS THEORY IS WRONG....!!*/
const h=g.signal;
h.addEventListener("abort",()=>{console.log("abortion call...abortion programme here...");},{once:true});

/* signal property is an EventEmitter instance listener */

x.question("hi: ",{h},p=>{console.log("you said ",p.toUpperCase()); x.close(); process.exit();});

setTimeout(()=>{console.log("aborting the listening process...Calling process.exit() here will actually exit this program instance.");g.abort();process.exit();},4060);

console.log("hello keyboard");