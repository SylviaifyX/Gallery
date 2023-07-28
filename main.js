const swap = document.getElementById("text1");
const swap2 = document.getElementById("text2");
const swap3 = document.getElementById("text3");
const swap4 = document.getElementById("text4");
const swap5 = document.getElementById("text5");
const swap6 = document.getElementById("text6");
const swap7 = document.getElementById("text7");
const swap8 = document.getElementById("text8");

swap.addEventListener("click", (event) =>{
    event.target.style.background="green";
    event.target.style.color= "white";
});
swap2.addEventListener("click", (event) =>{
    event.target.style.background="orange";
    event.target.style.color= "purple";
});
swap3.addEventListener("click", (event) =>{
    event.target.style.background="blue";
    event.target.style.color= "black";
});
swap4.addEventListener("click", (event) =>{
    event.target.style.background="crimson";
    event.target.style.color= "white";
});
swap5.addEventListener("click", (event) =>{
    event.target.style.background="red";
    event.target.style.color= "grey";
});
swap6.addEventListener("click", (event) =>{
    event.target.style.background="pink";
    event.target.style.color= "black";
});
swap7.addEventListener("click", (event) =>{
    event.target.style.background="teal";
    event.target.style.color= "white";
});
swap8.addEventListener("click", (event) =>{
    event.target.style.background="gold";
    event.target.style.color= "black";
});