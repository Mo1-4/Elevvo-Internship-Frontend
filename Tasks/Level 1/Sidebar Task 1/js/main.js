const links = document.querySelectorAll("header nav .nav-links ul li")
const navbar = document.getElementById("nav")
const mainHeader = document.getElementById("head")
const toggler = document.querySelector(".icon")
const overlay = document.querySelector(".overlay")



links.forEach((li) =>{
    li.addEventListener("click", (e) =>{
        links.forEach((li) => {
            li.classList.remove("active")
        })

        e.currentTarget.classList.add("active")
        
    })
})

toggler.addEventListener("click", (e) =>{
    navbar.classList.toggle("none")
    mainHeader.classList.toggle("header-none")
    e.currentTarget.classList.toggle("left")
    overlay.classList.toggle("show")
})