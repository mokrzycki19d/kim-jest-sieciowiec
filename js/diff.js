const button1 = document.querySelector("#easy");
const button2 = document.querySelector("#medium");
const button3 = document.querySelector("#hard");
const button4 = document.querySelector("#cursed");
const message = document.querySelector("p")
let question = 0;

button1.addEventListener("click", ()=>{
    question = 10;
    localStorage.setItem('question', question);
})

button1.addEventListener("mouseover", ()=>{
    message.innerHTML = "Maksymalna liczba pytań: 10";
})

button2.addEventListener("click", ()=>{
    question = 5;
    localStorage.setItem('question', question);
})

button2.addEventListener("mouseover", ()=>{
    message.innerHTML = "Maksymalna liczba pytań: 5";
})

button3.addEventListener("click", ()=>{
    question = 3;
    localStorage.setItem('question', question);
})

button3.addEventListener("mouseover", ()=>{
    message.innerHTML = "Maksymalna liczba pytań: 3";
})

button4.addEventListener("click", ()=>{
    question = 1;
    localStorage.setItem('question', question);
})

button4.addEventListener("mouseover", ()=>{
    message.innerHTML = "Maksymalna liczba pytań: 1";
})

