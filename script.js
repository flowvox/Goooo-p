let moon = document.getElementById("moon")
let text = document.getElementById("text")
let train = document.getElementById("train")
let d_moon = document.getElementById("d-moon")
let man = document.getElementById("man")



window.addEventListener("scroll" ,()=>{
    let value = window.scrollY;
    moon.style.top = value * 1.2 + "px";
    text.style.top = 80 + value * -0.2 +"%"
    train.style.left = value *3 +"px"
    d_moon.style.top=80+value*.1 +"px"
    man.style.left=value*0.1+"px"

}
);

