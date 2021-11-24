const qMax = localStorage.getItem('question');
const button = document.querySelector("#chk");
const list = document.querySelector("#qlist");
const ask = document.querySelector("#ask");

ask.addEventListener("click", () => {
    if (button.checked) 
    {
        list.style.display = "none";
    } else 
        {
            list.style.display = "block";
        }
})