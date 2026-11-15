var slider = document.querySelector(".slider_image_container")
var rightBtn = document.querySelector(".rightBtn")
var leftBtn = document.querySelector(".leftBtn")
var images = document.querySelectorAll(".slider_image_container img")

var count = 0

// Right button
rightBtn.addEventListener("click", function () {

    if (count < images.length - 2) {
        count = count + 1
    }
    else {
        count = 0
    }
    slider.style.transition = "margin-left 0.5s ease";
    slider.style.marginLeft = -(count * 760) + "px"

})

// Left button
leftBtn.addEventListener("click", function () {

    if (count > 0) {
        count = count - 1
    }
    else {
        count = images.length - 2
    }
    slider.style.transition = "margin-left 0.5s ease";
    slider.style.marginLeft = -(count * 760) + "px"

})


var sidenav = document.getElementById("sidenavbar")
var menuicon = document.getElementById("menuicon")
var closenav = document.getElementById("closenav")

menuicon.addEventListener("click", function () {

  sidenav.style.right = 0
})


closenav.addEventListener("click", function () {

  sidenav.style.right = "-50%"
})
