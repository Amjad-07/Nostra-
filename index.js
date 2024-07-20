var closeElement = document.getElementById("close");
var titleElement = document.querySelector(".title");

closeElement.addEventListener("click", function () {
    titleElement.style.display = "none";
});

const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalid;

document.addEventListener("DOMContentLoaded", initialize);

function initialize() {
    if (slides.length > 0) {
        slides[slideIndex].classList.add("displayShow");
        intervalid = setInterval(nextSlide, 2000);
    }
}

function showSlide(index) {
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    } else {
        slideIndex = index;
    }
    slides.forEach(slide => {
        slide.classList.remove("displayShow");
    });
    slides[slideIndex].classList.add("displayShow");
}

function prevSlide() {
    clearInterval(intervalid);
    slideIndex--;
    showSlide(slideIndex);
}

function nextSlide() {
    clearInterval(intervalid);
    slideIndex++;
    showSlide(slideIndex);
    intervalid = setInterval(nextSlide, 2000);
}
const blackHearts = document.querySelectorAll(".blackheart");
const redHearts = document.querySelectorAll(".rednull");
console.log(blackHearts)

blackHearts.forEach((blackHeart, index) => {
    console.log(blackHeart, index)
    blackHeart.addEventListener("click", function () {
        blackHeart.classList.add("blacknull");
        redHearts[index].classList.remove("rednull");
    });
});

redHearts.forEach((redHeart, index) => {
    redHeart.addEventListener("click", function () {
        redHeart.classList.add("rednull");
        blackHearts[index].classList.remove("blacknull");
    });
});

let a = document.querySelector(".scroll");
a.addEventListener("click", function (ev) {
    ev.preventDefault();
    let targetId = a.getAttribute("href");
    document.querySelector(targetId).scrollIntoView({
        behavior: "smooth"
    });
});
let mostElement = document.querySelector(".mosty")
mostElement.addEventListener("click", function (ef) {
    ef.preventDefault()
    let targetOne = mostElement.getAttribute("href");
    document.querySelector(targetOne).scrollIntoView({
        behavior: "smooth"
    })

})
window.addEventListener("scroll", function () {

    let animated = this.document.querySelectorAll(".intial-anime")
    animated.forEach(anime => {
        let bound = anime.getBoundingClientRect().top
        let windowheight = window.innerHeight
        console.log(windowheight)
        console.log(bound)
        if (windowheight > bound) (
            anime.classList.remove("reveal-element")
        )
        // else if(bound>windowheight){
        //     el.classList.add("reveal-element")
        // }



    });

})
// ----------------------------------------------------------checkbox------------------------------------
function checking() {
    var checkboxes = document.getElementsByName("option");
    var selectedValues = [];

    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            selectedValues.push(checkboxes[i].value.toLowerCase());
            // console.log(selectedValues)
        }
    }

    var images = document.querySelectorAll(".image");

    images.forEach(image => {
        var tags = image.getAttribute("data-tags").split(',');
        console.log(tags)


        if (selectedValues.length === 0 || selectedValues.some(value => tags.includes(value))) {
            image.style.display = "block";
        } else {
            image.style.display = "none";
        }
    });
}
// ---------------------------------------------------sidenav-------------------------------
var sidenavClose = document.querySelector("#sidenav-close")
var sidenavContainer = document.querySelector(".sidenav-container")
var sidenavOpen = document.querySelector("#navmore-i")
sidenavClose.addEventListener("click", function () {
    sidenavContainer.style.marginLeft="-60%"

})
sidenavOpen.addEventListener("click",function(){
    sidenavContainer.style.marginLeft="0px"

})









