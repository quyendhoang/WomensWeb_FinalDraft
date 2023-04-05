window.addEventListener("load", function(){
    console.log("I am here")
});

document.querySelector("#small").addEventListener("click", function(){
    console.log("I am in small")
    bd = document.querySelector("body")
    bd.style.fontSize = "1em"
});

document.querySelector("#medium").addEventListener("click", function(){
    console.log("I am in medium")
    bd = document.querySelector("body")
    bd.style.fontSize = "1.5em"
});

document.querySelector("#large").addEventListener("click", function(){
    console.log("I am in large")   
    bd = document.querySelector("body")
    bd.style.fontSize = "2em"
});