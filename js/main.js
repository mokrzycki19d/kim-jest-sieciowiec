const qMax = localStorage.getItem('question');
const button = document.querySelector("#chk");
const list = document.querySelector("#qlist");
const ask = document.querySelector("#ask");
const chars = document.querySelector("#characters");

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

class Character
{
    constructor(id, sex, hair_colour, hair_length, skin, eyes, glasses, hat)
    {
        this.id = id;
        this.sex = sex;
        this.hair_colour = hair_colour;
        this.hair_length = hair_length;
        this.skin = skin;
        this.eyes = eyes;
        this.glasses = glasses;
        this.hat = hat;
    }
}