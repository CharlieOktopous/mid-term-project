const hamburger = document.getElementById("hamburger")
const cross = document.getElementById("cross")
const crossLabel = cross.querySelector("label")
const hamburgerLabel = hamburger.querySelector("label")
const menuList = document.getElementById("menu-list")


hamburger.addEventListener("click", () => {
    cross.style.display = "block"
    hamburger.style.display = "none"
    menuList.style.display = "block"
})

cross.addEventListener("click", () => {
    cross.style.display = "none"
    hamburger.style.display = "block"
    menuList.style.display = "none"

})