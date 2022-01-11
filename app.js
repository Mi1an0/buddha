const sdiv = document.getElementsByClassName('skilldiv')
const m = document.querySelector('h1')
const n = document.querySelector('.navbar-area')
const hamburger = document.querySelector('.hamburger')
const pages = document.querySelector('.pages')

function hopup(){
    this.style.marginBottom = 50 +"px"
}

function hopdown(){
    this.style.marginBottom = 0
}

for(const x of sdiv){
    x.addEventListener("mouseover",hopup)
    x.addEventListener("mouseout",hopdown)
}

m.addEventListener("mouseover", function(){
    m.style.fontSize = 80 +"px"
    n.style.display = "none"
})

m.addEventListener("mouseout", function(){
    m.style.fontSize = 60 +"px"
    n.style.display = "flex"
})

hamburger.addEventListener("click", function(){
    pages.classList.toggle('active')
})
