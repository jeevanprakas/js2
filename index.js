//1//
function sayHello(){
    console.log("Hello world")
}
sayHello()
//2//
function  displayWarning(){
    console.log("Warning! System Overload!")
}
displayWarning()
//3//
function printStatus(){
    console.log("System Status: Active")
}
printStatus()
//4//
function initialize(){
    console.log("Initialization Complete")
}
initialize()
//5//
function shutdown(){
    console.log("System Shutting Down…")
}
shutdown()
//6//
function startProcess(){
    console.log("Process Started")
}
startProcess()
//7//
function  endProcess(){
    console.log("Process Ended.")
}
//
function greetuser(a,b){
    console.log(a+b)
}
greetuser(2,3)

function calculateSum(a,b){
    console.log(a+b)
}
calculateSum(4,5)

//8//
function countdown(){
    for(var a=5;a>=1;a--){
        console.log(a)

    }
        
    }
countdown()
var b=80
 function  checkevenodd(){
    if (b%2==0)    {
       console.log("even")
    }
    else{
        console.log("odd")
    }
}
checkevenodd()
//10//
function beginSession(){
    console.log("Session Started.")
    endSession()
}

function endSession(){
    console.log("ession Ended.")
}
beginSession()