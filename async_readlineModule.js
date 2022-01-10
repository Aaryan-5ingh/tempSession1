const x=require('readline'); const y=x.createInterface({input:process.stdin,output:process.stdout});
y.question("hello : ",function(p){console.log("hi",p); y.close();});/ * use a counter and count upto 6 before calling the close method. It will listen six times for input. */
