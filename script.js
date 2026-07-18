
let button = document.querySelector(".butt");

function change(){
    let hide1 = document.querySelector(".header-section");
    let hide2 = document.querySelector(".grobiki");
    hide1.style.display = 'none';
    hide2.style.display = 'none';
    let text = document.querySelector(".textList");
    text.style.display = "block";
    let antibutton = document.querySelector(".antibutt");
    antibutton.style.display = "block";
}

button.addEventListener("click", change);

let antibutton = document.querySelector(".antibutt");

function antichange(){
    let hide1 = document.querySelector(".header-section");
    let hide2 = document.querySelector(".grobiki");
    hide1.style.display = 'block';
    hide2.style.display = 'block';
    let text = document.querySelector(".textList");
    text.style.display = "none";
    let antibutton = document.querySelector(".antibutt");
    antibutton.style.display = "none";
}

antibutton.addEventListener("click", antichange);
