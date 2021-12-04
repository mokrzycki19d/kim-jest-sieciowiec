const qMax = localStorage.getItem('question');
const button = document.querySelector("#chk");
const list = document.querySelector("#qlist");
const ask = document.querySelector("#ask");
const exit = document.querySelector("#exit");
const chars = document.querySelector("#characters");
const mode = document.querySelector("#mode");
const button_mode = document.querySelector("#chk2");
const mode_text = document.querySelector("#mode_id");
const h = document.querySelector("h1");
const characters = document.querySelectorAll(".character");
const questions = document.querySelectorAll(".question");

let guessMode = false;
let gameEnd = false;
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

exit.addEventListener("click", () => {
    if(gameEnd)
    {
        window.location.replace("double.html");
    }
    else
    {
        window.location.replace("index.html");
    }
})

ask.addEventListener("click", () => {
    if (button.checked && !gameEnd) 
    {
        list.style.display = "none";
        chars.style.display = "grid";

    } else if(!gameEnd)
            {
                list.style.display = "block";
                if(window.innerWidth <= 1000)
                {   
                    chars.style.display = "none";
                }
            }

})

mode.addEventListener("click", () => {
    if(!gameEnd)
    {
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
    }
})


for(let i = 0; i < characters.length; i++)
{
    characters[i].addEventListener("click", ()=>{
        if(!guessMode && !gameEnd)
        {
            characters[i].classList.toggle("selected");
        }
        else if(characters[i].className !== "character selected" && !gameEnd)
        {
            if(Networker.id == i+1)
            {
                h.innerText = "Udało ci się zgadnąć!";
            }
            else
            {
                 h.innerText = "Nie prawda, tak naprawdę sieciowcem jest...";
            }

            gameEnd = true;
            list.style.display = "none";
            ask.style.opacity = "0.1";
            mode.style.opacity = "0.1";
            exit.innerHTML = "Restart"
            for(let i = 0; i < characters.length; i++)
            {
                characters[i].classList.remove("selected")
            }

            for(let i = 0; i < characters.length; i++)
            {
                if(i+1 != Networker.id)
                characters[i].classList.add("notnetworker")
            }
        }
    })
}


let qFunctions = [
    () => Networker.sex == "m",
    () => Networker.hair_colour == "light",
    () => Networker.hair_colour == "red",
    () => Networker.hair_colour == "dark",
    () => Networker.hair_colour == "other",
    () => Networker.eyes == "green",
    () => Networker.eyes == "blue",
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
        if(!guessMode && qNum <= qMax && get(i) && !gameEnd)
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
