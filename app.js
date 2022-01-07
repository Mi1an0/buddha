const sdiv = document.getElementsByClassName('skilldiv');
const m = document.querySelector('h1');
const n = document.querySelector('.navbar-area');

function hopup(){
    this.style.marginBottom = 50 +"px";
    // setTimeout(() => this.style.marginBottom = 0,300);
}

function hopdown(){
    this.style.marginBottom = 0;
}

for(const x of sdiv){
    x.addEventListener("mouseover",hopup);
    x.addEventListener("mouseout",hopdown)
}

m.addEventListener("mouseover", function(){
    m.style.fontSize = 80 +"px";
    n.style.display = "none";
});

m.addEventListener("mouseout", function(){
    m.style.fontSize = 60 +"px";
    n.style.display = "flex";
});