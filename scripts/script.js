let body = document.querySelector("body");
let anchor = document.querySelectorAll("a");
let toggle = document.querySelector("#toggle");
let circle = document.querySelector("#circle");
let active = document.querySelectorAll(".active");
let hidden = document.querySelectorAll(".hidden");

body.addEventListener("keydown", function(e){
    if(e.key == "ArrowRight" || e.key == "ArrowLeft") {
        priceToggle();
    } else if(e.key == "t") {
        console.log(`You pushed the '${e.key}'OOL key!`);
    } else if(e.key == "o") {
        console.log(`You pushed the T'${e.key}'OL key!`);
    } else if(e.key == "l") {
        console.log(`You pushed the TOO'${e.key}' key!`);
    }else {
        console.log(`You pushed the ${e.key} key!`);
    }
} );

toggle.addEventListener("click", function() {
    priceToggle();
});

anchor.forEach(a => a.addEventListener("click", function() {
    alert("Not yet implemented!)")
}));

function priceToggle() {
    toggle.classList.toggle("background");
    circle.classList.toggle("move");

    active.forEach(tag => tag.classList.toggle("animation-hide"));
    setTimeout(function(){
        active.forEach(tag => tag.classList.toggle("hidden"));
        active.forEach(tag => tag.classList.toggle("active"));
    }, 300)

    setTimeout(function() {
        hidden.forEach(tag => tag.classList.toggle("animation-show"));
        hidden.forEach(tag => tag.classList.toggle("hidden"));
        hidden.forEach(tag => tag.classList.toggle("active"));
    }, 300)

    setTimeout(function() {
        active.forEach(tag => tag.classList.remove("animation-hide"));
        hidden.forEach(tag => tag.classList.remove("animation-show"));
        active = document.querySelectorAll(".active");
        hidden = document.querySelectorAll(".hidden");
    }, 600)
};