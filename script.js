let moon = document.getElementById("moon")
let text = document.getElementById("text")
let train = document.getElementById("train")
let d_moon = document.getElementById("d-moon")
let man = document.getElementById("man")



window.addEventListener("scroll" ,()=>{
    let value = window.scrollY;
    moon.style.top = value * 1.1 + "px";
    moon.style.left = value * 1.6 + "px";
    text.style.top = 80 + value * -0.2 +"%";
    train.style.left = value *3 +"px";
    d_moon.style.left = value * 16 + "px";
    d_moon.style.left=0+value*0.2 +"px";
    man.style.right =-value*0.4+"px";

}
);

