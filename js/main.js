const qMax = localStorage.getItem('question');
const button = document.querySelector("#chk");
const list = document.querySelector("#qlist");
const ask = document.querySelector("#ask");
const chars = document.querySelector("#characters");
const mode = document.querySelector("#mode");
const button_mode = document.querySelector("#chk2");
const mode_text = document.querySelector("#mode_id");
const h = document.querySelector("h1");
const characters = document.querySelectorAll(".character");
const questions = document.querySelectorAll(".question");

let guessMode = false;
let qNum = 1;

class Character
{
    constructor(id, sex, hair_colour, hair_length, skin, eyes, glasses, hat, facial_hair)
    {
        this.id = id;
        this.sex = sex;
        this.hair_colour = hair_colour;
        this.hair_length = hair_length;
        this.skin = skin;
        this.eyes = eyes;
        this.glasses = glasses;
        this.hat = hat;
        this.facial_hair = facial_hair;
    }
}

ask.addEventListener("click", () => {
    if (button.checked) 
    {
        list.style.display = "none";
        chars.style.display = "grid";

    } else 
        {
            list.style.display = "block";
            if(window.innerWidth <= 1000)
            {   
                chars.style.display = "none";
            }
        }

})

mode.addEventListener("click", () => {
    if (button_mode.checked) 
    {
        mode_text.innerText = "Zgadnij";
        h.innerText = "Zadaj pytanie " + qNum + ":";
        guessMode = false;
    } else 
        { 
            mode_text.innerText = "Odznacz";
            h.innerText = "Wybierz osobę, która może być sieciowcem..."
            guessMode = true;
        }

})


characters.forEach(item => item.addEventListener("click", ()=>{
        if(!guessMode)
        {
            item.classList.toggle("selected");
        }
}))

let qFunctions = [
    () => Networker.sex == "m",
    () => Networker.hair_colour == "light",
    () => Networker.hair_colour == "red",
    () => Networker.hair_colour == "dark",
    () => Networker.eyes == "green",
    () => Networker.hair_length == "long",
    () => Networker.skin == "dark",
    () => Networker.hat,
    () => Networker.glasses,
    () => Networker.facial_hair
]

let mask = 0;
function set(idx)
{
    mask = mask|(1<<idx)
}

function get(idx)
{
    return (mask&(1<<idx)) === 0
}

for(let i = 0; i < questions.length; i++)
{
    questions[i].addEventListener("click", ()=>{
        if(!guessMode && qNum <= qMax && get(i))
        {
            set(i);
            qNum++;
            if(qNum <= qMax)
                h.innerText = "Zadaj pytanie " + qNum + ":";
            else
                h.innerText = "Skończyły ci się pytania";
            questions[i].classList.add(qFunctions[i]() ? "positive" : "negative");
        }
    })
}
