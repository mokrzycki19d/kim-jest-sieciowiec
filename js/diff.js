let button1 = document.querySelector("#easy");
let button2 = document.querySelector("#medium");
let button3 = document.querySelector("#hard");
let question = 0;

button1.addEventListener("click", ()=>{
    question = 10;
    localStorage.setItem('question', question);
})

button2.addEventListener("click", ()=>{
    question = 5;
    localStorage.setItem('question', question);
})

button3.addEventListener("click", ()=>{
    question = 3;
    localStorage.setItem('question', question);
})