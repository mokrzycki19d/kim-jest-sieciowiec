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
charArr[10] = new Character(11, "f", "red", "short", "dark", "blue", false, true, false)
charArr[11] = new Character(12, "m", "light", "long", "dark", "yellow", false, false, false)

charArr[12] = new Character(13, "m", "dark", "long", "light", "green", true, false, false)
charArr[13] = new Character(14, "f", "other", "short", "dark", "yellow", false, true, false)
charArr[14] = new Character(15, "f", "dark", "long", "light", "dark", false, false, false)
charArr[15] = new Character(16, "m", "other", "short", "light", "blue", false, true, true)
charArr[16] = new Character(17, "m", "light", "short", "dark", "blue", false, true, true)
charArr[17] = new Character(18, "f", "light", "long", "dark", "green", false, false, false)
charArr[18] = new Character(19, "m", "other", "short", "light", "pink", true, false, false)
                           //id  sex  hair    hair    skin      eyes   glass   hat   facial hair
charArr[19] = new Character(20, "f", "red", "long", "light", "yellow", false, false, false)
charArr[20] = new Character(21, "f", "other", "long", "light", "blue", true, true, false)
charArr[21] = new Character(22, "m", "red", "long", "dark", "blue", false, false, true)
charArr[22] = new Character(23, "f", "other", "short", "dark", "yellow", true, true, false)
charArr[23] = new Character(24, "m", "other", "short", "dark", "dark", true, true, false)

const randCharIdx = Math.floor(Math.random() * 24) + 1;
console.log(randCharIdx);
let Networker = charArr[0];
for(let i = 0; i < charArr.length; i++)
{
    if(charArr[i].id == randCharIdx)
    {
        Networker = charArr[i];
    }
}