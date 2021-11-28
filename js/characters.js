const charArr = new Array()
charArr[0] = new Character(1, "m", "light", "short", "light", "blue", false, false, false)
charArr[1] = new Character(2, "f", "dark", "long", "dark", "yellow", true, false, false)
charArr[2] = new Character(3, "m", "dark", "long", "dark", "blue", false, false, true)
charArr[3] = new Character(4, "m", "dark", "long", "light", "green", false, false, true)
charArr[4] = new Character(5, "f", "light", "long", "light", "dark", false, false, false)
charArr[5] = new Character(6, "f", "red", "long", "light", "green", true, false, true)
charArr[6] = new Character(7, "m", "red", "short", "light", "yellow", true, true, false)
charArr[7] = new Character(8, "m", "red", "short", "dark", "green", true, false, true)
charArr[8] = new Character(9, "f", "light", "short", "light", "blue", true, false, false)
charArr[9] = new Character(10, "f", "dark", "short", "dark", "dark", false, false, false)
charArr[10] = new Character(11, "f", "red", "short", "dark", "blue", true, true, false)
charArr[11] = new Character(12, "m", "light", "long", "dark", "yellow", false, false, false)

const randCharIdx = Math.floor(Math.random() * 12) + 1;
let Networker = charArr[0];
for(let i = 0; i < charArr.length; i++)
{
    if(charArr[i].id == randCharIdx)
    {
        Networker = charArr[i];
    }
}
